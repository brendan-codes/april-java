<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<h1>All Books</h1>
<h3 style="color: red"><c:out value="${error}"></c:out></h3>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Language</th>
            <th>Number of Pages</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${books}" var="b">
        <tr>
            <td>
            	<a href="/books/${b.id}">
            		<c:out value="${b.title}"/>
            	</a>
            </td>
            <td><c:out value="${b.description}"/></td>
            <td><c:out value="${b.language}"/></td>
            <td><c:out value="${b.numberOfPages}"/></td>
            <td>
            	<form action="">     
            		<input type="submit" value="delete" />
            	</form>
            </td>
        </tr>
        </c:forEach>
    </tbody>
</table>
<a href="/books/new">New Book</a>