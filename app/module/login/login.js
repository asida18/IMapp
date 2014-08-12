(
    function(){
        var moduleName='login';

        function render(el){
            document.querySelector('.login').addEventListener(
                'click',
                function(e){
                    e.preventDefault();
                   
                    var username = document.getElementById('username').value;
                    
                    // document.querySelector('#loginForm').classList.add('hidden');
                    app.trigger('login',username);

                }
            );
        }
        exports(moduleName,render);    
    }
)();