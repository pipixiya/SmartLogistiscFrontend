import"./vendor.ad4e1a55.js";/* empty css             *//* empty css               *//* empty css              */import{_ as e,r as l,g as r,x as a,y as t,G as o,o as s,c as u,w as i,a as d,f as n,q as c,m as p,K as m,C as g,H as f,I as b,i as h,h as k,l as y,j as _,L as v,d as j,M as w,N as F,O as S,P as x,E as U,Q as C,R as V,J as P,S as z,T as I}from"./index.c3f822ec.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */const R=["src"],T={class:"dialog-footer"};var D=e({__name:"DialogAddSwiper",props:{type:String,reload:Function},setup(e,{expose:j}){const w=e,F=l(null),S=r({uploadImgServer:a,token:t("token")||"",visible:!1,ruleForm:{url:"",link:"",sort:""},rules:{url:[{required:"true",message:"图片不能为空",trigger:["change"]}],sort:[{required:"true",message:"排序不能为空",trigger:["change"]}]},id:""}),x=e=>{const l=e.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(l))return m.error("请上传 jpg、jpeg、png 格式的图片"),!1},U=e=>{S.ruleForm.url=e.data||""},C=()=>{console.log(F.value.validate),F.value.validate((e=>{e&&("add"==w.type?g.post("/carousels",{carouselUrl:S.ruleForm.url,redirectUrl:S.ruleForm.link,carouselRank:S.ruleForm.sort}).then((()=>{m.success("添加成功"),S.visible=!1,w.reload&&w.reload()})):g.put("/carousels",{carouselId:S.id,carouselUrl:S.ruleForm.url,redirectUrl:S.ruleForm.link,carouselRank:S.ruleForm.sort}).then((()=>{m.success("修改成功"),S.visible=!1,w.reload&&w.reload()})))}))};return j({open:e=>{S.visible=!0,e?(S.id=e,(e=>{g.get(`/carousels/${e}`).then((e=>{S.ruleForm={url:e.carouselUrl,link:e.redirectUrl,sort:e.carouselRank}}))})(e)):S.ruleForm={url:"",link:"",sort:""}},close:()=>{S.visible=!1}}),(l,r)=>{const a=o("Plus"),t=f,m=b,g=h,j=k,w=y,V=_,P=v;return s(),u(P,{title:"add"==e.type?"添加轮播图":"修改轮播图",modelValue:S.visible,"onUpdate:modelValue":r[3]||(r[3]=e=>S.visible=e),width:"400px"},{footer:i((()=>[d("span",T,[n(V,{onClick:r[2]||(r[2]=e=>S.visible=!1)},{default:i((()=>[c("取 消")])),_:1}),n(V,{type:"primary",onClick:C},{default:i((()=>[c("确 定")])),_:1})])])),default:i((()=>[n(w,{model:S.ruleForm,rules:S.rules,ref_key:"formRef",ref:F,"label-width":"100px",class:"good-form"},{default:i((()=>[n(g,{label:"图片",prop:"url"},{default:i((()=>[n(m,{class:"avatar-uploader",action:S.uploadImgServer,accept:"jpg,jpeg,png",headers:{token:S.token},"show-file-list":!1,"before-upload":x,"on-success":U},{default:i((()=>[S.ruleForm.url?(s(),p("img",{key:0,style:{width:"200px",height:"100px",border:"1px solid #e9e9e9"},src:S.ruleForm.url,class:"avatar"},null,8,R)):(s(),u(t,{key:1,class:"avatar-uploader-icon"},{default:i((()=>[n(a)])),_:1}))])),_:1},8,["action","headers"])])),_:1}),n(g,{label:"跳转链接",prop:"link"},{default:i((()=>[n(j,{type:"text",modelValue:S.ruleForm.link,"onUpdate:modelValue":r[0]||(r[0]=e=>S.ruleForm.link=e)},null,8,["modelValue"])])),_:1}),n(g,{label:"排序值",prop:"sort"},{default:i((()=>[n(j,{type:"number",modelValue:S.ruleForm.sort,"onUpdate:modelValue":r[1]||(r[1]=e=>S.ruleForm.sort=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])}}},[["__scopeId","data-v-21d2c46e"]]);const q={class:"header"},B=["src"],N=["href"],A={__name:"Swiper",setup(e){const a=l(),t=r({loading:!1,tableData:[],currentPage:1,pageSize:10,type:"add",multipleSelection:[],total:0});j((()=>{o()}));const o=()=>{t.loading=!0,g.get("/carousels",{params:{pageNumber:t.currentPage,pageSize:t.pageSize}}).then((e=>{t.tableData=e.list,t.total=e.totalCount,t.currentPage=e.currPage,t.loading=!1}))},u=()=>{console.log("addSwiper",a.value),t.type="add",a.value.open()},f=e=>{t.multipleSelection=e},b=()=>{t.multipleSelection.length?g.delete("/carousels",{data:{ids:t.multipleSelection.map((e=>e.carouselId))}}).then((()=>{m.success("删除成功"),o()})):m.error("请选择项")},h=e=>{t.currentPage=e,o()};return(e,l)=>{const r=_,m=w,g=F,k=S,y=x,v=U;return s(),p(C,null,[n(v,{class:"swiper-container"},{header:i((()=>[d("div",q,[n(r,{type:"primary",icon:V(z),onClick:u},{default:i((()=>[c("增加")])),_:1},8,["icon"]),n(m,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:b},{reference:i((()=>[n(r,{type:"danger",icon:V(I)},{default:i((()=>[c("批量删除")])),_:1},8,["icon"])])),_:1})])])),default:i((()=>[n(k,{load:t.loading,ref:"multipleTable",data:t.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:f},{default:i((()=>[n(g,{type:"selection",width:"55"}),n(g,{label:"轮播图",width:"200"},{default:i((e=>[d("img",{style:{width:"150px",height:"150px"},src:e.row.carouselUrl,alt:"轮播图"},null,8,B)])),_:1}),n(g,{label:"跳转链接"},{default:i((e=>[d("a",{target:"_blank",href:e.row.redirectUrl},P(e.row.redirectUrl),9,N)])),_:1}),n(g,{prop:"carouselRank",label:"排序值",width:"120"}),n(g,{prop:"createTime",label:"添加时间",width:"200"})])),_:1},8,["load","data"]),n(y,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:h},null,8,["total","page-size","current-page"])])),_:1}),n(D,{ref_key:"addSwiper",ref:a,reload:o,type:t.type},null,8,["type"])],64)}}};export{A as default};
