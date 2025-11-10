#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
SPC subtree helper

Commands:
  split-branch                 Create/refresh local branch 'spc-split' from packages/nhs-fdp-spc
  push-main <remote>           Push 'spc-split' to <remote>:main (org repo)
  tag-alpha                    Create tag spc-v<version> using packages/nhs-fdp-spc/package.json version
  push-tag <remote>            Push the current spc-v<version> tag to <remote>
  clean                        Delete local 'spc-split' branch (ignore if missing)

Examples:
  ./scripts/spc-subtree-sync.sh split-branch
  ./scripts/spc-subtree-sync.sh push-main nhsdigital
  ./scripts/spc-subtree-sync.sh tag-alpha
  ./scripts/spc-subtree-sync.sh push-tag nhsdigital
  ./scripts/spc-subtree-sync.sh clean

Notes:
- Ensure a remote exists for the org repo, e.g.:
    git remote add nhsdigital git@github.com:NHSDigital/nhs-fdp-spc.git
- The tag step reads version from packages/nhs-fdp-spc/package.json.
USAGE
}

here() { pwd; }
root_dir=$(here)

pkg_version() {
  node -p "require('${root_dir}/packages/nhs-fdp-spc/package.json').version"
}

tag_name() {
  echo "spc-v$(pkg_version)"
}

cmd=${1:-help}
case "$cmd" in
  split-branch)
    echo "▶ Splitting subtree from packages/nhs-fdp-spc into local branch 'spc-split'"
    git subtree split --prefix=packages/nhs-fdp-spc -b spc-split
    ;;
  push-main)
    remote=${2:-}
    if [ -z "$remote" ]; then echo "Missing <remote>"; usage; exit 1; fi
    echo "▶ Pushing 'spc-split' to '$remote:main'"
    git push "$remote" spc-split:main
    ;;
  tag-alpha)
    tag=$(tag_name)
    if git rev-parse -q --verify refs/tags/$tag >/dev/null; then
      echo "Tag $tag already exists. Delete it first if you want to re-create."; exit 1
    fi
    echo "▶ Creating tag $tag"
    git tag -a "$tag" -m "SPC alpha release $tag"
    ;;
  push-tag)
    remote=${2:-}
    if [ -z "$remote" ]; then echo "Missing <remote>"; usage; exit 1; fi
    tag=$(tag_name)
    echo "▶ Pushing tag $tag to $remote"
    git push "$remote" "$tag"
    ;;
  clean)
    echo "▶ Deleting local branch 'spc-split' if present"
    git branch -D spc-split 2>/dev/null || true
    ;;
  help|--help|-h)
    usage
    ;;
  *)
    echo "Unknown command: $cmd"; usage; exit 1;
    ;;
 esac
