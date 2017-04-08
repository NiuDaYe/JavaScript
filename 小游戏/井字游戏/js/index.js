
  var flag; // 标记轮到谁了
  var A = 'A',
      B = 'B',    // 双方下棋的标识
      model = [],
      cells = [];    // 存储的二维数组

  var newGame = function(){
      //console.log('初始化清空所有标记');
      for (i=0; i<3; i++)
          for (j=0; j<3; j++){
              model[i][j] = 0;
              cells[i][j].text = '';
          }
       flag = 0;  //   0 标记A先下棋，1标记B先下棋

       var cellss = document.getElementsByClassName('cells'); 
       for(var k = 0;k<cellss.length;k++)
          cellss[k].className = "cells"; 
        
  }

  var freshView = function(){
      var i, j;
      for (i=0; i<3; i++)
          for (j=0; j<3; j++)
              if (model[i][j] == 1)
                  cells[i][j].text = A;
              else if (model[i][j] == 2)
                  cells[i][j].text = B;
  }

  var checkWin = function(x, y){  //根据元素ID判断横向三个或者竖向三个是或者斜着的三个否相等
    // 检查 X 方向
    if (model[x][y] != 0 && model[0][y] == model[1][y] && model[0][y] == model[2][y])
        return 1;
    // 检查 Y 方向
    if (model[x][y] != 0 && model[x][0] == model[x][1] && model[x][0] == model[x][2])
        return 1;
    // 如果在 \ 方向
    if (x == y)
        // 检查 \ 方向
        if (model[0][0] != 0 && model[0][0] == model[1][1] && model[0][0] == model[2][2])
            return 1;
    // 如果在 / 方向
    if ( ( x == 2 && y == 0 ) || ( x == 0 && y == 2 ) || ( x == 1 && y == 1 ) )
        // 检查 / 方向
        if (model[2][0] != 0 && model[2][0] == model[1][1] && model[2][0] == model[0][2])
            return 1;
    return 0;
}

function getClass(tagName,className) //获得标签名为tagName,类名className的元素 
      { 
        if(document.getElementsByClassName) //支持这个函数 
        {    return document.getElementsByClassName(className); 
        } 
        else
        {    var tags=document.getElementsByTagName(tagName);//获取标签 
          var tagArr=[];//用于返回类名为className的元素 
          for(var i=0;i < tags.length; i++) 
          { 
            if(tags[i].class == className) 
            { 
              tagArr[tagArr.length] = tags[i];//保存满足条件的元素 
            } 
          } 
          return tagArr; 
        } 
      }

window.onload = function(){
    var i, j;
    // 初始化二维数组
    for (i=0; i<3; i++){
        model[i] = [];
        cells[i] = [];
    }

    for (i=0; i<3; i++)
        for (j=0; j<3; j++){
            cells[j][i] = document.getElementById('cell-' + i + '-' + j);//获取九宫格元素

            (function(j, i){
                cells[i][j].onclick = function(){
                    cells[i][j].className = 'cells active';
                    model[i][j] = flag + 1;

                    if (flag)
                        flag = 0;
                    else
                        flag = 1;

                    freshView();  //元素赋图标

                    var actives = document.getElementsByClassName('active'); 

                    if (checkWin(i, j)){
                        //console.log(flag) //  1是A赢   0是B赢
                        if (flag ==1)
                            alert("选手 " + A + " 胜利！");
                        else
                            alert("选手 " + B + " 胜利！");
                          
                          setTimeout(function(){
                            newGame();  // 两秒后重新开始
                          },2000);

                    }else if(actives.length == 9){
                          alert('平局');
                          setTimeout(function(){
                            newGame();  // 两秒后重新开始
                          },2000);

                    } 

                }
            })(i, j);
        }
    newGame();
}
