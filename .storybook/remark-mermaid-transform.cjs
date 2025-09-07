// Simple remark plugin converting ```mermaid fences into <Mermaid code="..." /> JSX nodes
import { visit } from 'unist-util-visit';

export default function remarkMermaidTransform() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || node.lang !== 'mermaid') return;
      const value = node.value || '';
      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'Mermaid',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'code', value },
        ],
        children: []
      };
    });
  };
}
