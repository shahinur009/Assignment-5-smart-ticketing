const seatCount = parseInt(document.getElementById('seat-count').innerText);

const totalSelected = parseInt(document.getElementById('total-select').innerText);

const totalPrice = parseInt(document.getElementById('total-price').innerText);

const ticketFair = parseInt(document.getElementById('ticket-fair').innerText);


function makeList() {
    const seatList = document.getElementById('seat-list')
    let perSeat = ""

    document.querySelectorAll('.selected-color-seat').forEach(function (e) {

        perSeat += `<tr>
    <td>${e.id}</td>
    <td>Economoy</td>
    <td>550</td>
</tr>`
    })
    seatList.innerHTML = perSeat
}




document.querySelectorAll('.btn-seat').forEach(function (e) {
    e.addEventListener('click', function (e) {
        const totalSelectedSeat = getSelectedSeat();
        // console.log(totalSelectedSeat)
        const isSelectedSeat = e.target.classList.contains('selected-color-seat');
        // console.log(totalSelectedSeat.length)
        if (totalSelectedSeat > 3 && !isSelectedSeat) {
            alert('You cannot select more then 4 seat');
            return false

        }

        addBackgroundColorById(e.target.id)
        let notSelectedSeat = seatCount - getSelectedSeat();
        document.getElementById('seat-count').innerText = notSelectedSeat

        // console.log(e.target.id)

        let totalSellSeats = totalSelected + getSelectedSeat();
        document.getElementById('total-select').innerText = totalSellSeats

        let totalTicketPrice = totalSellSeats * ticketFair;
        document.getElementById('total-price').innerText = totalTicketPrice;

        updateGrandTotal(totalTicketPrice)
        makeList()


    })
    // alert ('hello')
})
function couponValidation(){
    let getCouponName = document.getElementById('coupon').value
    let couponButton = document.getElementById('coupon-button')
    if (getCouponName === '') {
        couponButton.setAttribute('disabled', true)
    }else{couponButton.removeAttribute('disabled',)
    

    }
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('selected-color-seat');
}
function getSelectedSeat() {
    const totalSelectedSeat = document.querySelectorAll('.selected-color-seat');
    return totalSelectedSeat.length;

}
function updateGrandTotal(value) {

    document.getElementById('grand-total-price').innerText = value;
}

function applyCoupon() {
    let getCouponName = document.getElementById('coupon').value

    if (getCouponName === '') {
        alert('Please Input Valid Coupon Number')
        return false
    }
    if (getCouponName != 'NEW15' && getCouponName != 'Couple 20') {
        alert('Please Input Valid Coupon Number')
        return false
    }
    let totalDiscountPercent = 0;
    if (getCouponName == 'NEW15') {
        totalDiscountPercent = 15;
    } else if (getCouponName == 'Couple 20') {
        totalDiscountPercent = 20;
    }

    let totalTicketPrice = getSelectedSeat() * ticketFair;
    let totalDiscount = totalDiscountPercent * totalTicketPrice / 100;
    // alert(totalTicketPrice - totalDiscount)

    updateGrandTotal(totalTicketPrice - totalDiscount)
    let couponButton = document.getElementById('coupon-button')
    couponButton.classList.add('hidden')
    let couponInputText = document.getElementById('coupon')
    couponInputText.classList.add('hidden')

}





