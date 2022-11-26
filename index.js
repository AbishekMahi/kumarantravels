fetch('https://script.googleusercontent.com/macros/echo?user_content_key=UPQ3kchthhzI9U3iovSZiAWE0BoXWF0FvV71NqPIBcbUAUeqM5qZAVuLm5RuhkOWgZiM-BLPGv34EfQCjaKdJ11g3O9-W22Wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDOEKVF2wcEnprY_xwIHZWEp3k5mPGO2qfkQT1kS6P9AGQha4tejfkN5Hbcu7DPbar-Fw2rnBzVhiBtQbXchhaZPKkKamR_l4A&lib=MKMQYSLXcbLpWqc6EYbvbdAEAf5IAhdjz', {
    'method': "GET",
})
    .then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (datas) {
        // This is the JSON from our response
        console.log(datas);
        console.log(datas[0].tour_type,);
        let content = "";
        datas.map((values) => {
            content += `<div class="col-12 col-md-6 col-lg-3 py-2"
            data-string="${values.tour_title} ${values.places} ${values.tour_type}">
            <div class="card text-center " title="${values.tour_title}">
                <img src="${values.image}" class="card-img-top"
                        loading="lazy" title="${values.tour_title}"
                        alt="${values.tour_title}">
                <div class="card-body">
                    <h5 class="card-title">${values.tour_title}</h5>
                    <h6 class="card-subtitle">${values.days}</h6>
                    <p class="card-text">${values.places}</p>
                    <div class="row card-lottie-row">
                        <lottie-player title="Food" style="height: 80px; width: 80px;"
                            src="images/food.json" background="transparent" speed="1" loop autoplay>
                        </lottie-player>
                        <lottie-player style="height: 60px; width: 60px;"
                            src="https://assets10.lottiefiles.com/packages/lf20_zeqvblhl.json"
                            background="transparent" speed=".8" loop autoplay>
                        </lottie-player>
                        <lottie-player style="height: 65px; width: 65px;" src="images/car.json"
                            background="transparent" speed="1" loop autoplay>
                        </lottie-player>
                        <lottie-player style="height: 65px; width: 65px;" src="images/sleep.json"
                            background="transparent" speed="1" loop autoplay>
                        </lottie-player>
                    </div>
                    <a href="#" class="btn btn-outline-primary">Know More</a>
                </div>
            </div>
        </div>`;
        });
        document.getElementById("results").innerHTML = content;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });