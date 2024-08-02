(this["webpackJsonpclient-product-management"]=this["webpackJsonpclient-product-management"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},30:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);a(31);var s=a(10),r=a.n(s),n=(a(32),a(0)),l=a.n(n),o=a(28),c=a.n(o),i=(a(37),a(17)),m=a.n(i),d=(a(38),a(2)),u=a(12),h=a(4),p=a(11),E=a.n(p),g=a(68);const v="http://localhost:8080/api/user/",b=new g.a(JSON.parse(localStorage.getItem("currentUser")));var N=new class{get currentUserValue(){return b.value}get currentUser(){return b.asObservable()}login(e){const t={authorization:"Basic "+btoa(e.username+":"+e.password)};return E.a.get(v+"login",{headers:t}).then(e=>{localStorage.setItem("currentUser",JSON.stringify(e.data)),b.next(e.data)})}logOut(){return E.a.post(v+"logout",{}).then(e=>{localStorage.removeItem("currentUser"),b.next(null)})}register(e){return E.a.post(v+"registration",JSON.stringify(e),{headers:{"Content-Type":"application/json; charset=UTF-8"}})}findAllProducts(){return E.a.get(v+"products",{headers:{"Content-Type":"application/json; charset=UTF-8"}})}purchaseProduct(e){return E.a.post(v+"purchase",JSON.stringify(e),{headers:{"Content-Type":"application/json; charset=UTF-8"}})}};class C{constructor(e,t,a,s,r,n){this.username=e,this.password=t,this.token=a,this.name=s,this.id=r,this.role=n}}class f{constructor(e,t,a,s){this.user=e,this.product=t,this.purchaseDate=a,this.id=s}}class U extends l.a.Component{constructor(e){super(e),this.state={products:[],errorMessage:"",infoMessage:"",currentUser:new C}}componentDidMount(){N.currentUser.subscribe(e=>{this.setState({currentUser:e})}),this.setState({products:{loading:!0}}),N.findAllProducts().then(e=>{this.setState({products:e.data})})}purchaseProduct(e){if(this.state.currentUser){var t=new f(this.state.currentUser,e);N.purchaseProduct(t).then(e=>{this.setState({infoMessage:"Mission is completed."})},e=>{this.setState({errorMessage:"Unexpected error occurred."})})}else this.setState({errorMessage:"You should sign in to purchase a product"})}detail(e){localStorage.setItem("currentProduct",JSON.stringify(e)),this.props.history.push("/detail/"+e.id)}render(){const{products:e,infoMessage:t,errorMessage:a}=this.state;return l.a.createElement("div",{className:"col-md-12"},t&&l.a.createElement("div",{className:"alert alert-success"},l.a.createElement("strong",null,"Successfull! ")," ",t,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),a&&l.a.createElement("div",{className:"alert alert-danger"},l.a.createElement("strong",null,"Error! ")," ",a,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),e.loading&&l.a.createElement("em",null," Loading products..."),e.length&&l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Price"),l.a.createElement("th",{scope:"col"},"Detail"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,e.map((e,t)=>l.a.createElement("tr",{key:e.id},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,"$ "+e.price),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-info",onClick:()=>this.detail(e)},"Detail")),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success",onClick:()=>this.purchaseProduct(e)},"Purchase")))))))}}a(56);class w extends l.a.Component{constructor(e){super(e),N.currentUserValue&&this.props.history.push("/"),this.state={user:new C("",""),submitted:!1,loading:!1,errorMessage:""}}handleChange(e){var{name:t,value:a}=e.target,s=this.state.user;s[t]=a,this.setState({user:s})}handleLogin(e){e.preventDefault(),this.setState({submitted:!0});const{user:t}=this.state;t.username&&t.password&&(this.setState({loading:!0}),N.login(t).then(e=>{this.props.history.push("/home")},e=>{console.log(e),this.setState({errorMessage:"Username or password is not valid.",loading:!1})}))}render(){const{user:e,submitted:t,loading:a,errorMessage:s}=this.state;return l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"card card-container"},l.a.createElement("img",{id:"profile-img",className:"profile-img-card",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}),s&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.a.createElement("strong",null,"Error! ")," ",s),l.a.createElement("form",{name:"form",onSubmit:e=>this.handleLogin(e)},l.a.createElement("div",{className:"form-group"+(t&&!e.username?" has-error":"")},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",value:e.username,onChange:e=>this.handleChange(e)}),t&&!e.username&&l.a.createElement("div",{className:"help-block"},"Username is required")),l.a.createElement("div",{className:"form-group"+(t&&!e.password?" has-error":"")},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",value:e.password,onChange:e=>this.handleChange(e)}),t&&!e.password&&l.a.createElement("div",{className:"help-block"},"Password is required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block  btn-signin form-submit-button",disabled:a},"Login")))))}}a(57);class y extends l.a.Component{constructor(e){super(e),N.currentUserValue&&this.props.history.push("/"),this.state={user:new C("","",""),submitted:!1,loading:!1,errorMessage:""}}handleChange(e){var{name:t,value:a}=e.target,s=this.state.user;s[t]=a,this.setState({user:s})}handleRegister(e){e.preventDefault(),this.setState({submitted:!0});const{user:t}=this.state;t.username&&t.password&&t.name&&(this.setState({loading:!0}),N.register(t).then(e=>{this.props.history.push("/login")},e=>{409===e.response.status?this.setState({errorMessage:"Username is not available",loading:!1}):this.setState({errorMessage:"Unexpected error occurred.",loading:!1})}))}render(){const{user:e,submitted:t,loading:a,errorMessage:s}=this.state;return l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"card card-container"},l.a.createElement("img",{id:"profile-id",className:"profile-img-card",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}),s&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.a.createElement("strong",null,"Error! ")," ",s),l.a.createElement("form",{name:"form",onSubmit:e=>this.handleRegister(e)},l.a.createElement("div",{className:"form-group"+(t&&e.name?"has-error":"")},l.a.createElement("label",{htmlFor:"name"},"Full Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",value:e.name,onChange:e=>this.handleChange(e)}),t&&!e.name&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Full name is required.")),l.a.createElement("div",{className:"form-group"+(t&&e.username?"has-error":"")},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",value:e.username,onChange:e=>this.handleChange(e)}),t&&!e.username&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Username is required.")),l.a.createElement("div",{className:"form-group"+(t&&e.password?"has-error":"")},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",value:e.password,onChange:e=>this.handleChange(e)}),t&&!e.password&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Password is required.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block btn-signin form-submit-button",disabled:a},"Sign Up")))))}}class k extends l.a.Component{constructor(e){super(e),N.currentUserValue?this.state={user:N.currentUserValue}:this.props.history.push("/")}render(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"display-4"},"Hello, ",this.state.user.name))}}class S extends l.a.Component{constructor(e){super(e),this.state={id:this.props.match.params.id,product:JSON.parse(localStorage.getItem("currentProduct"))}}render(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"display-4"},"Product: ",this.state.product.name),l.a.createElement("h1",{className:"display-4"},"Product Id: ",this.state.id))}}a(58);var M=new class{constructor(){N.currentUser.subscribe(e=>{this.headers={"Content-Type":"application/json",authorization:"Bearer "+(e?e.token:"")}})}updateUser(e){return E.a.put("http://localhost:8080/api/admin/user-update",JSON.stringify(e),{headers:this.headers})}deleteUser(e){return E.a.post("http://localhost:8080/api/admin/user-delete",JSON.stringify(e),{headers:this.headers})}findAllUsers(){return E.a.get("http://localhost:8080/api/admin/user-all",{headers:this.headers})}},x=a(8),D=a(9);class A extends l.a.Component{constructor(e){super(e),this.state={user:this.props.user,submitted:!1,loading:!1,error:""}}componentDidMount(){const{handleModalCloseClick:e}=this.props;r()(this.modal).modal("show"),r()(this.modal).on("hidden.bs.modal",e)}handleCloseClick(){const{handleModalCloseClick:e}=this.props;r()(this.modal).modal("hide"),e()}handleChange(e){var{name:t,value:a}=e.target,s=this.state.user;s[t]=a,this.setState({user:s})}handleSubmit(e){e.preventDefault(),this.setState({submitted:!0});const{user:t}=this.state;t.username&&t.password&&(this.setState({loading:!0}),-1!==t.id?this.updateUser(t):this.createUser(t))}createUser(e){N.register(e).then(e=>{console.log(e.data),this.props.onChildUpdate(e.data,!0,!1),this.handleCloseClick()},e=>{this.props.onChildUpdate(null,!1,!1),this.setState({error:"Unexpected error occurred.",loading:!1})})}updateUser(e){M.updateUser(e).then(e=>{console.log(e.data),this.props.onChildUpdate(e.data,!0,!0),this.handleCloseClick()},e=>{this.props.onChildUpdate(null,!1,!1),this.setState({error:"Unexpected error occurred.",loading:!1})})}render(){const{user:e,submitted:t,loading:a,error:s}=this.state;return l.a.createElement("div",null,e&&l.a.createElement("div",{className:"modal fade",id:"userModal",tabIndex:"-1",ref:e=>this.modal=e,role:"dialog","aria-labelledby":"userModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("form",{name:"form-user-update",onSubmit:e=>this.handleSubmit(e)},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"User Details"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},s&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.a.createElement("strong",null,"Error! ")," ",s,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"form-group"+(t&&!e.name?" has-error":"")},l.a.createElement("label",{htmlFor:"name"},"Full Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",value:e.name,onChange:e=>this.handleChange(e)}),t&&!e.name&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Name is required")),l.a.createElement("div",{className:"form-group"+(t&&!e.username?" has-error":"")},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",value:e.username,onChange:e=>this.handleChange(e)}),t&&!e.username&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Username is required")),l.a.createElement("div",{className:"form-group"+(t&&!e.password?" has-error":"")},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{readOnly:-1!==e.id,type:"password",className:"form-control",name:"password",value:e.password,onChange:e=>this.handleChange(e)}),t&&!e.password&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Password is required")),l.a.createElement("div",{className:"form-group"+(t&&!e.role?" has-error":"")},l.a.createElement("label",{htmlFor:"role"},"User Role"),l.a.createElement("select",{className:"form-control",name:"role",id:"role",required:!0,value:e.role,onChange:e=>this.handleChange(e)},l.a.createElement("option",{value:""},"Choose"),l.a.createElement("option",{value:"ADMIN"},"ADMIN"),l.a.createElement("option",{value:"USER"},"USER")),t&&!e.role&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Role is required"))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:()=>this.handleCloseClick()},"Close"),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Changes")))))))}}class P extends l.a.Component{constructor(e){super(e),this.state={user:this.props.user,error:""}}componentDidMount(){const{handleDeleteModalCloseClick:e}=this.props;r()(this.modal).modal("show"),r()(this.modal).on("hidden.bs.modal",e)}handleCloseClick(){const{handleDeleteModalCloseClick:e}=this.props;r()(this.modal).modal("hide"),e()}deleteUser(e){e.preventDefault();const{user:t}=this.state;M.deleteUser(t).then(e=>{this.props.onDeleteChildUpdate(t,!0),this.handleCloseClick()},e=>{this.props.onDeleteChildUpdate(null,!1),this.setState({error:"Unexpected error occurred.",loading:!1})})}render(){const{user:e,error:t}=this.state;return l.a.createElement("div",null,e&&l.a.createElement("div",{className:"modal fade",id:"deleteModal",ref:e=>this.modal=e,tabIndex:"-1",role:"dialog","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Confirmation"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},"Are you sure to delete ",l.a.createElement("strong",null,e.name),"?"),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:()=>this.handleCloseClick()},"Cancel"),l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:e=>this.deleteUser(e)},"I'm sure."))))))}}class q extends l.a.Component{constructor(e){super(e),this.state={selectedUser:new C,users:[],errorMessage:"",infoMessage:"",showModal:!1,showDeleteModal:!1}}componentDidMount(){this.setState({users:{loading:!0}}),M.findAllUsers().then(e=>{console.log(e),this.setState({users:e.data})})}createUserRequest(){this.setState({selectedUser:new C("","","","",-1)}),this.setState({showModal:!0})}editUserRequest(e){console.log(e),this.setState({selectedUser:e}),this.setState({showModal:!0})}deleteUserRequest(e){console.log(e),this.setState({selectedUser:e}),this.setState({showDeleteModal:!0})}handleModalCloseClick(){this.setState({showModal:!1})}handleDeleteModalCloseClick(){console.log("closed"),this.setState({showDeleteModal:!1})}onDeleteChildUpdate(e,t){if(!t)return;var a=this.state.users;let s=a.findIndex(t=>t.id==e.id);-1!==s&&(a.splice(s,1),this.setState({users:a,infoMessage:"Mission is completed."}))}onChildUpdate(e,t,a){console.log(e),t&&(this.saveUser(e,a),this.setState({infoMessage:"Mission is completed."}))}saveUser(e,t){t?this.updateUser(e):this.createUser(e)}createUser(e){var t=this.state.users;t.push(e),this.setState({users:t})}updateUser(e){var t=this.state.users;let a=t.findIndex(t=>t.id==e.id);t[a]=e}render(){const{user:e,users:t,infoMessage:a}=this.state;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-md-12"},a&&l.a.createElement("div",{className:"alert alert-success"},l.a.createElement("strong",null,"Successful!")," ",a,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),t.loading&&l.a.createElement("em",null,"Loading users..."),this.state.users.length&&l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-xs-6"},l.a.createElement("h3",{className:"panel-title"},"All Users")),l.a.createElement("div",{className:"col col-xs-6 text-right"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>this.createUserRequest()},"Create New User")))),l.a.createElement("div",{className:"card-body"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"UserName"),l.a.createElement("th",{scope:"col"},"Role"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,t.map((e,t)=>l.a.createElement("tr",{key:e.id},l.a.createElement("th",{scope:"row"},t),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.username),l.a.createElement("td",null,e.role),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:()=>this.editUserRequest(e)},l.a.createElement(x.a,{icon:D.b})),l.a.createElement("button",{className:"btn btn-danger",onClick:()=>this.deleteUserRequest(e)},l.a.createElement(x.a,{icon:D.e})))))))))),this.state.showModal?l.a.createElement(A,{ref:"child",onChildUpdate:(e,t,a)=>this.onChildUpdate(e,t,a),handleModalCloseClick:()=>this.handleModalCloseClick(),user:this.state.selectedUser}):null,this.state.showDeleteModal?l.a.createElement(P,{ref:"deleteChild",onDeleteChildUpdate:(e,t)=>this.onDeleteChildUpdate(e,t),handleDeleteModalCloseClick:()=>this.handleDeleteModalCloseClick(),user:this.state.selectedUser}):null)}}class O extends l.a.Component{constructor(e){super(e)}render(){return l.a.createElement("div",{className:"page-wrap d-flex flex-row align-item-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("span",{className:"display-1 d-block"},"404"),l.a.createElement("div",{className:"mb-4 lead"},"Oops! We can't seem to find the page you are looking for.",l.a.createElement("a",{href:"/home",className:"btn btn-link"},"Back to Home"))))))}}class R extends l.a.Component{constructor(e){super(e)}render(){return l.a.createElement("div",{className:"page-wrap d-flex flex-row align-item-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("span",{className:"display-1 d-block"},"401"),l.a.createElement("div",{className:"mb-4 lead"},"Unauthorized! Access to this resource is denied.",l.a.createElement("a",{href:"/home",className:"btn btn-link"},"Back to Home"))))))}}class F extends l.a.Component{constructor(e){super(e)}render(){const{component:e,roles:t}=this.props,a=N.currentUserValue;return a?t&&-1===t.indexOf(a.role)?l.a.createElement(d.a,{to:{pathname:"/401"}}):l.a.createElement(e,null):l.a.createElement(d.a,{to:{pathname:"/login"}})}}var I=F;const L="ADMIN",j="USER";class J extends l.a.Component{constructor(e){super(e),this.state={history:Object(h.a)(),currentUser:null,isAdmin:!1,currentLocation:window.location.pathname}}componentWillMount(){this.unlisten=this.state.history.listen((e,t)=>{this.setState({currentLocation:e.pathname})})}componentWillUnmount(){this.unlisten()}componentDidMount(){N.currentUser.subscribe(e=>{this.setState({currentUser:e,isAdmin:e&&e.role===L})})}logout(){N.logOut().then(e=>{this.state.history.push("/home")},e=>{this.setState({errorMessage:"Unexpected error occurred"})})}render(){const{currentUser:e,isAdmin:t,history:a,currentLocation:s}=this.state;return l.a.createElement(d.c,{history:a},l.a.createElement("div",null,this.state.currentUser&&l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"https://reactjs.org"},l.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),"React"),l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement(u.a,{to:"/home",className:"/home"==s?"nav-item nav-link active":"nav-item nav-link"},l.a.createElement(x.a,{icon:D.a})," Home"),this.state.isAdmin&&l.a.createElement(u.a,{to:"/admin",className:"/admin"==s?"nav-item nav-link active":"nav-item nav-link"},l.a.createElement(x.a,{icon:D.h})," Admin")),l.a.createElement("div",{className:"navbar-nav ml-auto"},l.a.createElement(u.a,{to:"/profile",className:"/profile"==s?"nav-item nav-link active":"nav-item nav-link"},l.a.createElement(x.a,{icon:D.f})," ",e.name),l.a.createElement("a",{onClick:()=>this.logout(),className:"nav-item nav-link"},l.a.createElement(x.a,{icon:D.d})," LogOut"))),!this.state.currentUser&&l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"https://tiptops.xyz"},l.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),"Tiptops"),l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement(u.a,{to:"/home",className:"/home"==s?"nav-item nav-link active":"nav-item nav-link"},l.a.createElement(x.a,{icon:D.a})," Home")),l.a.createElement("div",{className:"navbar-nav ml-auto"},l.a.createElement(u.a,{to:"/register",className:"/register"==s?"nav-item nav-link active":"nav-item nav-link"},l.a.createElement(x.a,{icon:D.g})," Register"),l.a.createElement(u.a,{to:"/login",className:"/login"==s?"nav-item nav-link active":"nav-item nav-link"},l.a.createElement(x.a,{icon:D.c})," Login"))),l.a.createElement("div",{className:"container"},l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",component:U}),l.a.createElement(d.b,{exact:!0,path:"/home",component:U}),l.a.createElement(d.b,{exact:!0,path:"/login",component:w}),l.a.createElement(d.b,{exact:!0,path:"/register",component:y}),l.a.createElement(I,{path:"/profile",roles:[L,j],component:k}),l.a.createElement(d.b,{exact:!0,path:"/detail/:id",component:S}),l.a.createElement(I,{path:"/admin",roles:[L],component:q}),l.a.createElement(d.b,{exact:!0,path:"/404",component:O}),l.a.createElement(d.b,{exact:!0,path:"/401",component:R}),l.a.createElement(d.a,{from:"*",to:"/404"})))))}}var T=J;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.4b4229e3.chunk.js.map