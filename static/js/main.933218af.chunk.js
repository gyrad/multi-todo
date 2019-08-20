(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),i=a(5),s=a(59),r=a.n(s),o=a(29),u=function(e){var t=e.visibility,a=e.closeModal,n=e.title,s=e.content,r=e.buttonLabel,o=e.buttonClass,u=e.buttonAction,m=Object(i.b)();return Object(c.createPortal)(l.a.createElement("div",{className:"modal ".concat(t?"is-active":"")},l.a.createElement("div",{className:"modal-background",onClick:a}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},n)),l.a.createElement("section",{className:"modal-card-body"},s),l.a.createElement("footer",{className:"modal-card-foot",style:{justifyContent:"flex-end"}},l.a.createElement("button",{className:"button ".concat(o),onClick:function(){m(u()),a()}},r),l.a.createElement("button",{className:"button",onClick:a},"Cancel")))),document.body)},m=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.lists}),a=Object(n.useState)(!1),c=Object(o.a)(a,2),s=c[0],m=c[1],d=l.a.createElement(u,{visibility:s,closeModal:function(){return m(!1)},title:"Delete All Lists",content:"Are you sure you want to delete all lists? This action is irreversible.",buttonLabel:"Delete All Lists",buttonClass:"is-danger",buttonAction:function(){return e({type:"DELETE_ALL_LISTS"})}});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("h1",{className:"title"},"Multi Todo"))),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{className:"button is-success",onClick:function(){return e({type:"ADD_LIST",payload:r()()})}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-plus"})),l.a.createElement("span",null,"Add New List")),"\xa0\xa0",l.a.createElement("button",{className:"button is-danger",onClick:function(){return m(!0)},disabled:0===t.length},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-trash"})),l.a.createElement("span",null,"Delete All Lists"))))))),d)},d=a(6),E=a(41),p=a.n(E),b=a(71),f=(a(113),a(91)),y=a(92),g=a(94),v=a(93),h=a(95),N=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{className:"duedate-btn",title:"Set a Due Date",onClick:this.props.onClick},l.a.createElement("i",{className:"fas fa-calendar"})," \xa0 Set due date")}}]),t}(n.Component),O=(a(114),function(e){var t=Object(i.b)(),a=function(e,a,n){t(function(e,t,a){return{type:"SET_DUE_DATE",payload:{listId:e,itemId:t,dueDate:a}}}(e,a,n))},c=Object(n.useRef)(),s=function(e,a,n){n.bubbles||t(function(e,t,a){return{type:"UPDATE_LIST_ITEM",payload:{listId:e,itemId:t,newItem:a}}}(e,a,n.target.textContent))},r=e.listId,o=e.item,u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=new Date(o.dueDate),d=new Date,E=o.dueDate?"".concat(u[m.getMonth()]," ").concat(m.getDate(),", ").concat(m.getFullYear()):null,p=E&&m.getFullYear()===d.getFullYear()&&m.getMonth()===d.getMonth()&&m.getDate()===d.getDate()?l.a.createElement("div",{className:"duedate"},l.a.createElement("strong",{style:{color:"dodgerblue"}},"Due today! ")):E&&m.getFullYear()===d.getFullYear()&&m.getMonth()===d.getMonth()&&m.getDate()===d.getDate()+1?l.a.createElement("div",{className:"duedate"},l.a.createElement("strong",{style:{color:"dodgerblue"}},"Due tomorrow! ")):E&&m>=d?l.a.createElement("div",{className:"duedate"},l.a.createElement("strong",null,"Due on: ")," ",E):l.a.createElement("div",{className:"duedate",style:{color:"tomato"}},l.a.createElement("strong",{style:{color:"red"}},"Was due on: ")," ",E);return l.a.createElement("div",{className:"ListItem panel-block ".concat(o.completed?"is-active":""),key:o.id,"data-id":o.id},l.a.createElement("span",{className:"handle-list-item"},l.a.createElement("i",{className:"fas fa-grip-vertical"})),l.a.createElement("input",{type:"checkbox",defaultChecked:o.completed,onChange:function(){return function(e,a){t(function(e,t){return{type:"TOGGLE_COMPLETED",payload:{listId:e,itemId:t}}}(e,a))}(r,o.id)}}),l.a.createElement("span",{style:o.completed?{textDecoration:"line-through"}:null,contentEditable:!0,className:"editable-list-item",suppressContentEditableWarning:!0,spellCheck:!1,onBlur:function(e){return s(r,o.id,e)},onKeyPress:function(e){"Enter"===e.key&&(s(r,o.id,e),e.target.blur())}},o.todoItem),l.a.createElement("div",{className:"action-btns",tabIndex:"0"},l.a.createElement("i",{className:"fas fa-ellipsis-v"}),l.a.createElement("ul",null,l.a.createElement(b.a,{customInput:l.a.createElement(N,null),onChange:function(e){return a(r,o.id,e)},withPortal:!0,popperModifiers:{offset:{enabled:!0,offset:"20px, 0px"}},shouldCloseOnSelect:!0,ref:c,minDate:new Date},l.a.createElement("div",{style:{clear:"both",padding:5}},l.a.createElement("button",{className:"button is-info clear-btn",onClick:function(){a(r,o.id,null),c.current.setOpen(!1)}},"Clear"))),l.a.createElement("li",{className:"delete-btn",title:"Delete Item",onClick:function(){return t(function(e,t){return{type:"DELETE_ITEM",payload:{listId:e,itemId:t}}}(r,o.id))}},l.a.createElement("i",{className:"fas fa-trash"})," \xa0 Delete Item"))),o.dueDate?p:null)}),I=function(e){var t=Object(i.b)(),a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],u=c[1],m=function(e,a){a.preventDefault(),t(function(e,t){return{type:"ADD_ITEM",payload:{newItemId:r()(),newItem:e,listId:t}}}(s,e)),u("")},d=e.listId;return l.a.createElement("div",{className:"panel-block"},l.a.createElement("form",{className:"control has-icons-left",onSubmit:function(e){return m(d,e)}},l.a.createElement("input",{type:"text",className:"input is-small",placeholder:"Add Item...",onChange:function(e){return u(e.target.value)},value:s}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-plus","aria-hidden":"true"}))))},D=(a(115),function(e){var t,a,c,s=Object(i.b)(),r=Object(n.useState)(!1),m=Object(o.a)(r,2),E=m[0],b=m[1],f=function(e,t){t.bubbles||s(function(e,t){return{type:"UPDATE_LIST_TITLE",payload:{listId:e,newTitle:t}}}(e,t.target.textContent))},y=e.list,g=y.id,v=y.title,h=y.items,N=y.visibility;return 0===h.length&&(t=l.a.createElement("p",{className:"list-msg"},"There are no items in your list.")),0===(a=h.filter(function(e){return"active"===N?!e.completed:"completed"===N?e.completed:e})).length&&0!==h.length&&(t=l.a.createElement("p",{className:"list-msg"},"There are no ",N," items in your list.",l.a.createElement("br",null),"active"===N?"Woohoo, you\u2019ve completed all your tasks! \ud83e\udd73":null)),c=h.filter(function(e){return e.completed}).length/h.length*100,l.a.createElement("div",{className:"column is-one-third List","data-id":g},l.a.createElement("div",{className:"panel"},l.a.createElement("p",{className:"panel-heading"},l.a.createElement("span",{className:"handle-list"},l.a.createElement("i",{className:"fas fa-grip-vertical"})),l.a.createElement("span",{className:"list-title",contentEditable:!0,onBlur:function(e){return f(g,e)},onKeyPress:function(e){"Enter"===e.key&&(f(g,e),e.target.blur())},suppressContentEditableWarning:!0,spellCheck:!1},v),l.a.createElement("span",{className:"action-btns"},l.a.createElement("button",{className:"delete-list-btn",onClick:function(){return b(!0)},title:"Delete List"},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-times"}))))),l.a.createElement("div",{className:"progressbar-wrapper"},l.a.createElement("div",{className:"progressbar",style:{width:"".concat(c,"%"),backgroundColor:"".concat(100===c?"dodgerblue":"lightblue")}})),l.a.createElement("p",{className:"panel-tabs"},l.a.createElement("button",{onClick:function(){return s({type:"SHOW_ACTIVE",payload:g})},className:"active"===N?"is-active":null},"Active"),l.a.createElement("button",{onClick:function(){return s({type:"SHOW_COMPLETED",payload:g})},className:"completed"===N?"is-active":null},"Completed"),l.a.createElement("button",{onClick:function(){return s({type:"SHOW_ALL",payload:g})},className:"all"===N?"is-active":null},"All")),l.a.createElement(p.a,{options:{handle:".handle-list-item",dragClass:"list-item-drag",ghostClass:"list-item-ghost",chosenClass:"list-item-chosen",animation:150},onChange:function(e){var t,a;s((t=g,a=Object(d.a)(h).sort(function(t,a){return e.indexOf(t.id)-e.indexOf(a.id)}),console.log(a),{type:"UPDATE_LIST_ITEM_ORDER",payload:{listId:t,newListItemOrder:a}}))}},a.map(function(e){return l.a.createElement(O,{item:e,listId:g,key:e.id})})),t,l.a.createElement(I,{listId:g})),l.a.createElement(u,{visibility:E,closeModal:function(){return b(!1)},title:"Delete List",content:"Are you sure you want to delete this list? This action is irreversible.",buttonLabel:"Delete List",buttonClass:"is-danger",buttonAction:function(){return s({type:"DELETE_LIST",payload:g})}}))}),T=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.lists}),a=l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"container has-text-centered"},"You currently have no lists. Today is a great day to start a new todo list!"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section",style:{paddingTop:".5rem"}},l.a.createElement("div",{className:"container"},l.a.createElement(p.a,{options:{handle:".handle-list",dragClass:"list-drag",ghostClass:"list-ghost",chosenClass:"list-chosen",animation:150},className:"columns is-multiline",onChange:function(a){e({type:"UPDATE_LIST_ORDER",payload:Object(d.a)(t).sort(function(e,t){return a.indexOf(e.id)-a.indexOf(t.id)})})}},t.map(function(e){return l.a.createElement(D,{key:e.id,list:e,visibility:e.visibility})})))),0===t.length?a:null)},_=(a(116),a(117),a(118),function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.lists});return Object(n.useEffect)(function(){var t=JSON.parse(localStorage.getItem("storedState"));t&&e(function(e){return{type:"LOAD_SAVED_STATE",payload:e}}(t))},[e]),Object(n.useEffect)(function(){localStorage.setItem("storedState",JSON.stringify(t))}),l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(T,null),l.a.createElement("div",{className:"shameless-plug"},"Made with ",l.a.createElement("i",{className:"fas fa-heart"})," by\xa0",l.a.createElement("a",{href:"http://tenzinggaychey.com",target:"_blank",rel:"noopener noreferrer"},"Gaychey")))}),L=a(25),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LIST_ITEM_ORDER":var a=t.payload,n=a.listId,l=a.newListItemOrder;return Object(d.a)(e).map(function(e){return e.id===n&&(e.items=l),e});case"UPDATE_LIST_ORDER":case"LOAD_SAVED_STATE":return t.payload;case"TOGGLE_COMPLETED":var c=t.payload,i=c.listId,s=c.itemId;return Object(d.a)(e).map(function(e){return e.id===i&&e.items.map(function(e){return e.id===s&&(e.completed=!e.completed),e}),e});case"ADD_ITEM":var r=t.payload,o=r.newItemId,u=r.newItem,m=r.listId;return Object(d.a)(e).map(function(e){return e.id===m&&e.items.push({id:o,todoItem:u,completed:!1}),e});case"DELETE_ITEM":return Object(d.a)(e).map(function(e){return e.id===t.payload.listId&&(e.items=e.items.filter(function(e){return e.id!==t.payload.itemId})),e});case"SHOW_ACTIVE":return Object(d.a)(e).map(function(e){return t.payload===e.id&&(e.visibility="active"),e});case"SHOW_COMPLETED":return Object(d.a)(e).map(function(e){return t.payload===e.id&&(e.visibility="completed"),e});case"SHOW_ALL":return Object(d.a)(e).map(function(e){return t.payload===e.id&&(e.visibility="all"),e});case"UPDATE_LIST_TITLE":return Object(d.a)(e).map(function(e){return t.payload.listId===e.id&&(e.title=t.payload.newTitle),e});case"DELETE_LIST":return Object(d.a)(e).filter(function(e){return e.id!==t.payload});case"ADD_LIST":return[{id:t.payload,title:"Click me to edit title",visibility:"all",items:[]}].concat(Object(d.a)(e));case"UPDATE_LIST_ITEM":return Object(d.a)(e).map(function(e){return e.id===t.payload.listId&&(e.items=e.items.map(function(e){return e.id===t.payload.itemId&&(e.todoItem=t.payload.newItem),e})),e});case"DELETE_ALL_LISTS":return[];case"SET_DUE_DATE":var E=t.payload,p=E.listId,b=E.itemId,f=E.dueDate;return Object(d.a)(e).map(function(e){return e.id===p&&e.items.map(function(e){return e.id===b&&(e.dueDate=f),e}),e});default:return e}},S=Object(L.b)({lists:C}),j=Object(L.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(c.render)(l.a.createElement(i.a,{store:j},l.a.createElement(_,null)),document.getElementById("root"))},96:function(e,t,a){e.exports=a(119)}},[[96,1,2]]]);
//# sourceMappingURL=main.933218af.chunk.js.map