import"./vendor.ad4e1a55.js";/* empty css             *//* empty css               *//* empty css              */import{g as e,d as t,C as r,h as a,X as l,Y as o,j as n,N as i,M as s,G as u,O as d,P as p,E as c,o as m,c as g,w as f,a as b,f as h,m as y,Z as S,Q as v,q as x,R as k,J as w,$ as C,K as _,a0 as j,T as P}from"./index.c3f822ec.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                   */const N={class:"header"},I={key:0},z={key:1},V={key:2},T=b("a",{style:{cursor:"pointer","margin-right":"10px"}},"配货完成",-1),D=b("a",{style:{cursor:"pointer","margin-right":"10px"}},"出库",-1),O=b("a",{style:{cursor:"pointer","margin-right":"10px"}},"关闭订单",-1),q={__name:"Order",setup(q){const M=e({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,orderNo:"",orderStatus:"",options:[{value:"",label:"全部"},{value:0,label:"待支付"},{value:1,label:"已支付"},{value:2,label:"配货完成"},{value:3,label:"出库成功"},{value:4,label:"交易成功"},{value:-1,label:"手动关闭"},{value:-2,label:"超时关闭"},{value:-3,label:"商家关闭"}]});t((()=>{U()}));const U=()=>{M.loading=!0,r.get("/orders",{params:{pageNumber:M.currentPage,pageSize:M.pageSize,orderNo:M.orderNo,orderStatus:M.orderStatus}}).then((e=>{M.tableData=e.list,M.total=e.totalCount,M.currentPage=e.currPage,M.loading=!1}))},$=()=>{M.currentPage=1,U()},E=e=>{M.multipleSelection=e},G=e=>{M.currentPage=e,U()},J=e=>{let t;if(e)t=[e];else{if(!M.multipleSelection.length)return console.log("state.multipleSelection",M.multipleSelection.length),void _.error("请选择项");t=M.multipleSelection.map((e=>e.orderId))}r.put("/orders/checkDone",{ids:t}).then((()=>{_.success("配货成功"),U()}))},K=e=>{let t;if(e)t=[e];else{if(!M.multipleSelection.length)return void _.error("请选择项");t=M.multipleSelection.map((e=>e.orderId))}r.put("/orders/checkOut",{ids:t}).then((()=>{_.success("出库成功"),U()}))},Q=e=>{let t;if(e)t=[e];else{if(!M.multipleSelection.length)return void _.error("请选择项");t=M.multipleSelection.map((e=>e.orderId))}r.put("/orders/close",{ids:t}).then((()=>{_.success("关闭成功"),U()}))};return(e,t)=>{const r=a,_=l,q=o,U=n,R=i,X=s,Y=u("router-link"),Z=d,A=p,B=c;return m(),g(B,{class:"order-container"},{header:f((()=>[b("div",N,[h(r,{style:{width:"200px","margin-right":"10px"},placeholder:"请输入订单号",modelValue:M.orderNo,"onUpdate:modelValue":t[0]||(t[0]=e=>M.orderNo=e),onChange:$,clearable:""},null,8,["modelValue"]),h(q,{onChange:$,modelValue:M.orderStatus,"onUpdate:modelValue":t[1]||(t[1]=e=>M.orderStatus=e),style:{width:"200px","margin-right":"10px"}},{default:f((()=>[(m(!0),y(v,null,S(M.options,(e=>(m(),g(_,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),h(U,{type:"primary",icon:k(j),onClick:t[2]||(t[2]=e=>J())},{default:f((()=>[x("配货完成")])),_:1},8,["icon"]),h(U,{type:"primary",icon:k(j),onClick:t[3]||(t[3]=e=>K())},{default:f((()=>[x("出库")])),_:1},8,["icon"]),h(U,{type:"danger",icon:k(P),onClick:t[4]||(t[4]=e=>Q())},{default:f((()=>[x("关闭订单")])),_:1},8,["icon"])])])),default:f((()=>[h(Z,{load:M.loading,data:M.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:E},{default:f((()=>[h(R,{type:"selection",width:"55"}),h(R,{prop:"orderNo",label:"订单号"}),h(R,{prop:"totalPrice",label:"订单总价"}),h(R,{prop:"orderStatus",label:"订单状态"},{default:f((t=>[b("span",null,w(e.$filters.orderMap(t.row.orderStatus)),1)])),_:1}),h(R,{prop:"payType",label:"支付方式"},{default:f((e=>[1==e.row.payType?(m(),y("span",I,"微信支付")):2==e.row.payType?(m(),y("span",z,"支付宝支付")):(m(),y("span",V,"未知"))])),_:1}),h(R,{prop:"createTime",label:"创建时间"}),h(R,{label:"操作"},{default:f((e=>[1==e.row.orderStatus?(m(),g(X,{key:0,title:"确定配货完成吗？",onConfirm:t=>J(e.row.orderId),"confirm-button-text":"确定","cancel-button-text":"取消"},{reference:f((()=>[T])),_:2},1032,["onConfirm"])):C("",!0),2==e.row.orderStatus?(m(),g(X,{key:1,title:"确定出库吗？",onConfirm:t=>K(e.row.orderId),"confirm-button-text":"确定","cancel-button-text":"取消"},{reference:f((()=>[D])),_:2},1032,["onConfirm"])):C("",!0),4==e.row.orderStatus||e.row.orderStatus<0?C("",!0):(m(),g(X,{key:2,title:"确定关闭订单吗？",onConfirm:t=>Q(e.row.orderId),"confirm-button-text":"确定","cancel-button-text":"取消"},{reference:f((()=>[O])),_:2},1032,["onConfirm"])),h(Y,{to:{path:"/order_detail",query:{id:e.row.orderId}}},{default:f((()=>[x("订单详情")])),_:2},1032,["to"])])),_:1})])),_:1},8,["load","data"]),h(A,{background:"",layout:"prev, pager, next",total:M.total,"page-size":M.pageSize,"current-page":M.currentPage,onCurrentChange:G},null,8,["total","page-size","current-page"])])),_:1})}}};export{q as default};
