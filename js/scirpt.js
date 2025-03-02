function changeBackgroundColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    document.documentElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}

document.getElementById('change-clr-btn').addEventListener('click',changeBackgroundColor)

document.getElementById('homework').addEventListener('click',function(){
    window.location.href = "question.html";
})
// date
const today = new Date();
document.getElementById('current-date').innerText = today.toDateString();


const completedTaskEl = document.getElementById("completed-task");
const totalTaskEl = document.getElementById("total-task");
const activityLogEl = document.getElementById("activity-log");
let completedTaskCounter = completedTaskEl.innerText;
let totalTaskCounter = totalTaskEl.innerText;

const completeBtns = document.getElementsByClassName('complete-btn');
for(const completeBtn of completeBtns) {
    completeBtn.addEventListener("click", function(e){
        alert("Board Updated Successfully");
        completedTaskCounter++;
        totalTaskCounter--; 

        completedTaskEl.innerText = completedTaskCounter;
        totalTaskEl.innerText = String(totalTaskCounter).padStart(2, '0');
        const taskTitle = completeBtn.parentNode.parentNode.parentNode.querySelector('h3').innerText;
        
        completeBtn.classList.add("btn-disabled");
        completeBtn.setAttribute("disabled", true);
        const activityText = `You have completed the task ${taskTitle} at ${today.toLocaleTimeString()}`;
        activityLogEl.innerHTML += "<div class='text-sm mb-5 bg-[#F4F7FF] p-5 rounded'>"+activityText+
        "</div>";
        console.log("totalTaskCounter:", totalTaskCounter);
        if(totalTaskCounter === 0){
            alert("congrats!!!You have completed all the current tasks");
        }
    });
}

document.getElementById("clear-history-btn").addEventListener("click",
    function(){
        activityLogEl.innerHTML = "";
    }
)