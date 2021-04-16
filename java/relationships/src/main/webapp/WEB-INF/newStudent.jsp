<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h1>All Students</h1>
	<c:forEach items="${students}" var="s">
		<li><c:out value="${s.firstName}"></c:out></li>
		<li><c:out value="${s.school.name}"></c:out></li>
	</c:forEach>
	<form:form action="/students" method="post" modelAttribute="student">
		<p>
			<form:label path="firstName">Name yourself!</form:label>
			<form:errors path="firstName" />
			<form:input path="firstName" />
		</p>
		<p>
			<form:label path="lastName">Name your family!</form:label>
			<form:errors path="lastName" />
			<form:input path="lastName" />
		</p>
		<p>
			<form:label path="age">Name your age!</form:label>
			<form:errors path="age" />
			<form:input path="age" />
		</p>
		<p>
			<form:label path="school">Name your school!</form:label>
			<form:errors path="school" />
			<form:select path="school">
				<option value="" disabled selected />
				<c:forEach items="${schools}" var="schoo">
					<form:option value="${schoo}">
						<c:out value="${schoo.name}"></c:out>
					</form:option>
				</c:forEach>
			</form:select>
		</p>
		<input type="submit" value="Create you" />
	</form:form>
</body>
</html>