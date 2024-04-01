let cart = [];

        function addToCart(product) {
            cart.push({ product});
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartList = document.getElementById("cart");
            

            cartList.innerHTML = ''; // Clear the cart list

            cart.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${item.product} <button class="btn btn-sm btn-outline-danger my-1 mx-3" onclick="removeFromCart(${index})">Remove</button>`;
                cartList.appendChild(listItem);
            });
        }

        function mark_task1(){
            let check_task_list1 = document.getElementById('mark1');   
            check_task_list1.style.textDecoration = 'line-through';
            let done_msg1 = document.getElementById('done_ms1');
            done_msg1.innerText = 'Task Completed!';
        } addToCart
        function mark_task2(){
            let check_task_list2 = document.getElementById('mark2');
            check_task_list2.style.textDecoration = 'line-through';
            let done_msg2 = document.getElementById('done_ms2');
            done_msg2.innerText = 'Task Completed!';
        }
        function mark_task3(){
            let check_task_list3 = document.getElementById('mark3');
            check_task_list3.style.textDecoration = 'line-through';
            let done_msg3 = document.getElementById('done_ms3');
            done_msg3.innerText = 'Task Completed!';
        }
        function mark_task4(){
            let check_task_list4 = document.getElementById('mark4');
            check_task_list4.style.textDecoration = 'line-through';
            let done_msg4 = document.getElementById('done_ms4');
            done_msg4.innerText = 'Task Completed!';
        }