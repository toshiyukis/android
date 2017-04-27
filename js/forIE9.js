
  //IE9でclassListを使えるようにする
  Object.defineProperty(Element.prototype, 'classList', {
      get: function() {
          var self = this, bValue = self.className.split(" ")

          bValue.add = function (){
              var b;
              for(i in arguments){
                  b = true;
                  for (var j = 0; j<bValue.length;j++)
                      if (bValue[j] == arguments[i]){
                          b = false
                          break
                      }
                  if(b)
                      self.className += (self.className?" ":"")+arguments[i]
              }
          }
          bValue.remove = function(){
              self.className = ""
              for(i in arguments)
                  for (var j = 0; j<bValue.length;j++)
                      if(bValue[j] != arguments[i])
                          self.className += (self.className?" " :"")+bValue[j]
          }
          bValue.toggle = function(x){
              var b;
              if(x){
                  self.className = ""
                  b = false;
                  for (var j = 0; j<bValue.length;j++)
                      if(bValue[j] != x){
                          self.className += (self.className?" " :"")+bValue[j]
                          b = false
                      } else b = true
                  if(!b)
                      self.className += (self.className?" ":"")+x
              } else throw new TypeError("Failed to execute 'toggle': 1 argument required")
              return !b;
          }

          return bValue;
      },
      enumerable: false
  });
