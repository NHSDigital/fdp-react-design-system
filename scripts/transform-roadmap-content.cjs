const fs=require('fs');
const path=require('path');
const filePath=path.resolve(__dirname,'../src/components/ProductRoadmap/design-system.json');
const data=JSON.parse(fs.readFileSync(filePath,'utf8'));
const monthMap={Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12};
const parseHeading=h=>{const [mon,yr]=h.split(/\s+/);return {year:+yr,month:monthMap[mon]};};
const headings=data.dateHeadings.map(parseHeading);
const pad=n=>String(n).padStart(2,'0');
for(const cat of data.categories){
  for(const item of cat.roadmapItems){
    if(!item||typeof item.content!== 'string') continue;
    const raw=item.content;
    const parts=raw.split(/[;,]/).map(s=>s.trim()).filter(Boolean);
    if(parts.length===0) continue;
    const startIdx=item.date-1;
    const endIdx=startIdx+((item.length||1)-1);
    const startH=headings[startIdx];
    const endH=headings[endIdx]||startH;
    const startDate=`${startH.year}-${pad(startH.month)}-01`;
    const endDate=`${endH.year}-${pad(endH.month)}-01`;
    const children=parts.map((p,i)=>{
      const slug=p.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      return {
        id:`${item.id}__${slug||('child'+(i+1))}`,
        parentId:item.id,
        position:i+1,
        title:p,
        startDate,
        endDate: endDate!==startDate?endDate:undefined,
        startColumn:item.date,
        endColumn:item.date+((item.length||1)-1),
        status:'planned',
        type:'task',
        labels:[],
        estimate:null,
        priority:'medium'
      };
    });
    item.children=children;
  }
}
fs.writeFileSync(filePath,JSON.stringify(data,null,2));
console.log('Transformed design-system.json with children arrays.');
