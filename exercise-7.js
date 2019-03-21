function meleeRangedGrouping (str) {
    //your code here

    var result = []
    if (str === '' || !str){
        return result
    }

    var arr = str.split(',')
    var hero = []
    for (var i=0; i<arr.length; i++){
        hero.push(arr[i].split('-'))
    }
    // console.log(hero);
    var obj = {}
    for (var i=0; i<hero.length; i++){
        
        if (obj[hero[i][1]] === undefined ){
            obj[hero[i][1]] = []
        }
        obj[hero[i][1]].push(hero[i][0])
        

    }
    // console.log(Object.keys(obj));
    var keys = Object.keys(obj)
    
    for (var i=0; i<keys.length; i++){
        result.push(obj[keys[i]])
    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping()); // []