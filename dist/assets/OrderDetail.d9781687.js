import"./vendor.ad4e1a55.js";/* empty css                     *//* empty css                 *//* empty css                  */import{_ as a,u as e,g as d,d as s,C as t,E as l,N as r,O as o,o as c,c as i,w as n,a as p,f as u,J as f,m,p as h,b as v}from"./index.c3f822ec.js";/* empty css             */const b=a=>(h("data-v-3d8d32f0"),a=a(),v(),a),g={class:"data"},_=b((()=>p("div",{class:"card-header"},[p("span",null,"订单状态")],-1))),w=b((()=>p("div",{class:"card-header"},[p("span",null,"创建时间")],-1))),j=b((()=>p("div",{class:"card-header"},[p("span",null,"订单号")],-1))),x=["src"];var I=a({__name:"OrderDetail",setup(a){const h=e(),{id:v}=h.query,b=d({data:{},tableData:[]});return s((()=>{t.get(`/orders/${v}`).then((a=>{console.log(a),b.data=a,b.tableData=a.newBeeMallOrderItemVOS}))})),(a,e)=>{const d=l,s=r,t=o;return c(),i(d,{class:"order-container"},{default:n((()=>[p("div",g,[u(d,{class:"data-item",shadow:"hover"},{header:n((()=>[_])),default:n((()=>[p("div",null,f(b.data.orderStatusString),1)])),_:1}),u(d,{class:"data-item",shadow:"hover"},{header:n((()=>[w])),default:n((()=>[p("div",null,f(b.data.createTime),1)])),_:1}),u(d,{class:"data-item",shadow:"hover"},{header:n((()=>[j])),default:n((()=>[p("div",null,f(b.data.orderNo),1)])),_:1})]),u(t,{data:b.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:n((()=>[u(s,{label:"商品图片"},{default:n((e=>[(c(),m("img",{style:{width:"100px"},key:e.row.goodsId,src:a.$filters.prefix(e.row.goodsCoverImg),alt:"商品主图"},null,8,x))])),_:1}),u(s,{prop:"goodsId",label:"商品编号"}),u(s,{prop:"goodsName",label:"商品名"}),u(s,{prop:"goodsCount",label:"商品数量"}),u(s,{prop:"sellingPrice",label:"价格"})])),_:1},8,["data"])])),_:1})}}},[["__scopeId","data-v-3d8d32f0"]]);export{I as default};
