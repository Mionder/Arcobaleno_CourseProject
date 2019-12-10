<template>
    <div class="aboutUsFull">
        <div class="container">
          <h1>FAQs</h1>
           <div class="locationFull">
                <p class="location">-Де ми знаходимось?</p>
                <p class="answerLocation">-Ми знаходимося за адресою: м.Запоріжжя, вул.Запорізька, 46</p>
           </div>
           <div class="callFull">
               <p class="call">-Чи можу я зарезервувати столик?</p>
                <p class="answerCall">-Так, звичайно, за телефоном: +38(095) 654 80 08</p>
           </div>
            
            <div class="mailFull">
                <p class="mail">-Я хочу залишити свій відгук, де я можу це зробити?</p>
                <p class="answerMail">-Ви можете надіслати свій відгук на пошту: arcobalenopizzafaqs@gmail.com</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.aboutUsFull h1{
    padding-bottom: 2.5%;
    font-size: 4rem;
}

.locationFull,
.mailFull{
    background-color: rgb(54, 54, 54);
    opacity: 0.9;
    border-radius: 25px;
    max-width: 65%;
    margin-bottom: 2%;
    float: left;
    padding: 2%;
}

.callFull{
    float: right;
    background-color: rgb(54, 54, 54);
    opacity: 0.9;
    border-radius: 25px;
    max-width: 65%;
    padding: 2%;
    margin-bottom: 2%;
}

.locationFull p,
.callFull p,
.mailFull p{
     text-align: center;
}
</style>