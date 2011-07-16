<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
	<title>Login</title>
	<link href="<c:url value="/resources/lib/sencha-touch-1.1.0/resources/css/sencha-touch.css" />" rel="stylesheet" type="text/css" />
	<script type="text/javascript">
		var defLoginUrl = '${ctx}/j_spring_security_check';
		var homeUrl = '${ctx}';
	</script>	

</head>
<body>
     
	<script type="text/javascript" src="<c:url value="/resources/lib/sencha-touch-1.1.0/sencha-touch.js" />"></script>
    
    <div id="sencha-app">
		<script type="text/javascript" src="<c:url value="/resources/js/login/app.js" />"></script>
        
        <!-- Place your model files here -->
        <div id="sencha-models">
        </div>
        
        <!-- Place your view files here -->
        <div id="sencha-views">
			<script type="text/javascript" src="<c:url value="/resources/js/login/views/LoginForm.js" />"></script>
			<script type="text/javascript" src="<c:url value="/resources/js/login/views/Viewport.js" />"></script>
        </div>
        
        <!-- Place your controller files here -->
        <div id="sencha-controllers">
			<script type="text/javascript" src="<c:url value="/resources/js/login/controllers/LoginController.js" />"></script>
        </div>
    </div>
    
</body>
</html>