<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta name="viewport" content="width= device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Document</title>
    <div style="text-align : center">
        <h1>VIDEO SEARCH</h1>
        <input class="searchInput" type="text" placeholder="검색어 입력" />
        <button class="searchBtn" onclick="getData()">검색</button>
    </div>
    <div style="text-align:center">
        <button class = "back_button" onclick="getDataBack()">back</button>
        <button class = "next_button" onclick="getDataNext()">next</button>
    </div>

    <div style= "display: flex; flex-direction: column; align-items: center;" >
    <table border="1" >
        <thead class = "head">
            <tr>
                <th>image</th>    
                <th>title</th>
                <th>play_time</th>
                <th>datetime</th>
                <th>author</th>
            </tr>
        </thead>
        <tbody class = "container">
        </tbody>
    </table>
    </div>
    <script src="index.js"></script>
    </body>
</html>