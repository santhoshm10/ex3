angular.module("myApp", [])
.component("hello",{
template: `User Name<input type="text" ng-model="username">
<br> <br>
<p>Username : {{username}}</p>
<br><br>
Password<input type="text" ng-model="pass">
<br> <br>
<p>Password :{{pass}}</p> `
});
