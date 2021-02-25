//feetToMile
    function feetToMile(feet) 
        {
            if (feet<0) 
                    {
                        return " Please insert positive value. ";
                    }
            else
                    {
                        var mile = feet/5280;
                        return mile;
                    }
    
        }
    // var result = feetToMile(5280);
    // console.log(result);


//woodCalculator

        function woodCalculator(chair,table,bed) 
            {
                if (chair<0 ) 
                    {
                        return " Please insert positive value of chair. ";
                    }
                if (table<0 ) 
                    {
                        return " Please insert positive value of table. ";
                    }
                if (bed<0 ) 
                    {
                        return " Please insert positive value of bed. ";
                    }
                else
                    {
                        var chairCount = chair*1;
                        var tableCount = table*3;
                        var bedCount = bed*5;
                        var totalWood = chairCount+tableCount+bedCount;
                        return totalWood 
                    }
            }
    // console.log(woodCalculator(-1,1,1))


//brickCalculator
    function brickCalculator(floor) 
        {
            if (floor<=10) 
                {
                    var bricks = floor*15*1000;
                    return bricks;
                }  
            if (floor<=20) 
                {
                    var bricks = (floor-10)*12*1000+(10*15*1000);
                    return bricks;
                }  
            else
                {
                    var bricks = (floor-20)*10*1000+(10*15*1000)+(10*12*1000);
                    return bricks;
                } 
        }
    // console.log(brickCalculator(21))



//tinyFriend
    function tinyFriend(names) 
        {
            let min = names[0];
            for (let i = 0; i < names.length; i++)
                {
                    const element = names[i];
                    if (element.length< min.length) 
                        {
                            min = element
                        }

                }
                git initreturn min;
        }
      //  console.log(tinyFriend(["babo","saad","22222","76","1"]))