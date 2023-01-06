fetch('https://script.google.com/macros/s/AKfycbyjfHRaknuGuosMBBTiNY24qhuug4GVKPFYDzaR1oKP_RW95iTI4paJfug_RGSibzk4/exec', {
    'method': "GET",
})
    .then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (datas) {
        // This is the JSON from our response
        console.log(datas);
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
                    <button class="btn btn-outline-primary" data-bs-toggle="modal"
                    data-bs-target="#${values.tour_id}">Know More</button>
                </div>
            </div>
        </div>
        <!-- modal -->
        <div class="modal fade" id="${values.tour_id}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl  modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">${values.tour_title}
                        </h4>
                    </div>
                    <div class="modal-body">
                        <img src="${values.image}"
                            alt="${values.tour_title}">
                        <h5><i class="fas fa-suitcase-rolling"></i> Overview :</h5>
                        <p><b>Days :</b> ${values.days}</p>
                        <p><b>Places :</b> ${values.places}</p>
                        <p><b>Price :</b> ₹ ${values.price}</p>
                        <hr>
                        <div class="whatwe">
                        ${values.providings}
                        </div>
                        <hr>
                        <h5><i class="fas fa-map-marker-alt"></i> About This Place :</h5>
                        <p> The Kashi Vishwanath Temple is a famous Hindu temple dedicated to Lord Shiva. It
                         is located in Vishwanath Gali of Varanasi, Uttar Pradesh in India. The temple
                            stands on the western bank of the holy river Ganga, and is one of the twelve
                         Jyotirlingas, the holiest of Shiva temples.
                        </p>
                        <hr>
                        <h5><i class="fas fa-bus-alt"></i> Itinerary :</h5>
                        <p>
                            <b>Day 1:</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates
                            dicta? Totam eligendi autem dolorum modi, nulla nostrum fugiat tenetur
                            consequatur quisquam tempora vel nisi nobis, assumenda sequi iste neque?<br>
                            <b>Day 2:</b>
                            consectetur adipisicing elit. Dolore, voluptates
                            dicta? Totam eligendi autem dolorum modi, nulla nostrum fugiat tenetur
                            consequatur quisquam tempora vel nisi nobis, assumenda sequi iste neque?<br>
                            <b>Day 3:</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates
                            dicta? Totam eligendi autem dolorum modi, nulla nostrum fugiat tenetur
                            consequatur quisquam tempora vel nisi<br>
                            <b>Day 4:</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates
                            dicta? Totam eligendi nostrum fugiat tenetur
                            consequatur quisquam tempora vel nisi nobis, assumenda sequi iste <br>
                        </p>
                        <hr>
                        <h5><i class="fas fa-calendar-check"></i> Book Now :</h5>
                        <form class="gform pure-form pure-form-stacked" autocomplete="on" method="POST"
                            data-email="kiruvin4@gmail.com"
                            action="https://script.google.com/macros/s/AKfycby_L2267Y52JoaYQ55pjoZSGmAY1zVFzrp8qnHCuq_MHWdVQmkh78DP6i7hvJQrb9wYPg/exec">
                            <div class="form-elements">
                                <input name="Tour Title" id="title" type="text" required=""
                                    value="${values.tour_title}" hidden>
                                <div class="form-content">
                                    <label for="name">Name <span style="color: red;">*</span></label>
                                    <input name="Name" id="${values.tour_id}namevalue" type="text" required=""
                                        placeholder="Enter your name">
                                </div>
                                <div class="form-content">
                                    <label for="email">Email <span style="color: red;">*</span></label>
                                    <input name="Email" type="email" required=""
                                        placeholder="Enter your email">
                                </div>
                                <div class="form-content">
                                    <label for="mobile">Mobile Number <span
                                            style="color: red;">*</span></label>
                                    <input name="Phone" type="tel" pattern="[7-9]{1}[0-9]{9}" required=""
                                        placeholder="Enter mobile number">
                                </div>
                                <div class="form-content">
                                    <label for="guestCount">Number of Guest <span
                                            style="color: red;">*</span></label>
                                    <input name="Number of Guest" type="number" required=""
                                        placeholder="Number of Guest">
                                </div>
                                <div class="form-content submit-btn" style="margin-top: 10px;">
                                    <button class="btn btn-light submit " id="${values.tour_id}submit"
                                        title="Submit"> Book Now</button>
                                </div>
                            </div>
                            <!-- Thankyou_message -->
                            <div class="thankyou_message" style="display:none;">
                                <center>
                                    <div class="thanks" style="padding: 0; width: 15rem;">
                                        <lottie-player
                                            src="https://assets7.lottiefiles.com/packages/lf20_m3ixidnq.json"
                                            background="transparent" speed="1" loop autoplay>
                                        </lottie-player>
                                    </div>
                                    <h3>Thank You,<span id="nametxt"></span>
                                    <script>
                                        function nameText() {
                                            var x = document.getElementById("namevalue").value;
                                            document.getElementById("nametxt").innerHTML = x;
                                        }
                                    </script>
                                        <br> Your Tour Booked Succesfully.<br>
                                        We Will Reach You Soon
                                    </h3>
                                </center>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <div  class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</div>
                    </div>
                </div>
            </div>
        </div>`;
        });
        document.getElementById("results").innerHTML = content;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });


    // fetch('https://script.google.com/macros/s/AKfycbyjfHRaknuGuosMBBTiNY24qhuug4GVKPFYDzaR1oKP_RW95iTI4paJfug_RGSibzk4/exec', {
//     'method': "GET",
// })
//     .then(function (response) {
//         // The API call was successful!
//         return response.json();
//     }).then(function (datas) {
//         // This is the JSON from our response
//         console.log(datas);
//         console.log(datas[0].tour_type,);
//         let content = "";
//         datas.map((values) => {
//             content += `<div class="col-12 col-md-6 col-lg-3 py-2"
//             data-string="${values.tour_title} ${values.places} ${values.tour_type}">
//             <div class="card text-center " title="${values.tour_title}">
//                 <img src="${values.image}" class="card-img-top"
//                         loading="lazy" title="${values.tour_title}"
//                         alt="${values.tour_title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${values.tour_title}</h5>
//                     <h6 class="card-subtitle">${values.days}</h6>
//                     <p class="card-text">${values.places}</p>
//                     <div class="row card-lottie-row">
//                         <lottie-player title="Food" style="height: 80px; width: 80px;"
//                             src="images/food.json" background="transparent" speed="1" loop autoplay>
//                         </lottie-player>
//                         <lottie-player style="height: 60px; width: 60px;"
//                             src="https://assets10.lottiefiles.com/packages/lf20_zeqvblhl.json"
//                             background="transparent" speed=".8" loop autoplay>
//                         </lottie-player>
//                         <lottie-player style="height: 65px; width: 65px;" src="images/car.json"
//                             background="transparent" speed="1" loop autoplay>
//                         </lottie-player>
//                         <lottie-player style="height: 65px; width: 65px;" src="images/sleep.json"
//                             background="transparent" speed="1" loop autoplay>
//                         </lottie-player>
//                     </div>
//                     <button class="btn btn-outline-primary" data-bs-toggle="modal"
//                     data-bs-target="#${values.tour_id}">Know More</button>
//                 </div>
//             </div>   
//         </div>
//         <!-- modal -->
//         <div class="modal fade" id="${values.tour_id}" tabindex="-1" aria-labelledby="exampleModalLabel"
//             aria-hidden="true">
//             <div class="modal-dialog modal-xl  modal-dialog-scrollable">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h4 class="modal-title" id="exampleModalLabel">${values.tour_title}
//                         </h4>
//                     </div>
//                     <div class="modal-body">
//                         <img src="${values.image}"
//                             alt="${values.tour_title}">
//                         <h5><i class="fas fa-suitcase-rolling"></i> Overview :</h5>
//                         <p><b>Days :</b> ${values.days}</p>
//                         <p><b>Places :</b> ${values.places}</p>
//                         <p><b>Price :</b> ₹ ${values.price}</p>
//                         <hr>
//                         <div class="whatwe">
//                         ${values.providings}
//                         </div>
//                         <hr>
//                         <h5><i class="fas fa-map-marker-alt"></i> About This Place :</h5>
//                         <p> The Kashi Vishwanath Temple is a famous Hindu temple dedicated to Lord Shiva. It
//                          is located in Vishwanath Gali of Varanasi, Uttar Pradesh in India. The temple
//                             stands on the western bank of the holy river Ganga, and is one of the twelve
//                          Jyotirlingas, the holiest of Shiva temples.
//                         </p>
//                         <hr>
//                         <h5><i class="fas fa-bus-alt"></i> Itinerary :</h5>
//                         <p>
//                             <b>Day 1:</b>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates
//                             dicta? Totam eligendi autem dolorum modi, nulla nostrum fugiat tenetur
//                             consequatur quisquam tempora vel nisi nobis, assumenda sequi iste neque?<br>
//                             <b>Day 2:</b>
//                             consectetur adipisicing elit. Dolore, voluptates
//                             dicta? Totam eligendi autem dolorum modi, nulla nostrum fugiat tenetur
//                             consequatur quisquam tempora vel nisi nobis, assumenda sequi iste neque?<br>
//                             <b>Day 3:</b>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates
//                             dicta? Totam eligendi autem dolorum modi, nulla nostrum fugiat tenetur
//                             consequatur quisquam tempora vel nisi<br>
//                             <b>Day 4:</b>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates
//                             dicta? Totam eligendi nostrum fugiat tenetur
//                             consequatur quisquam tempora vel nisi nobis, assumenda sequi iste <br>
//                         </p>
//                         <hr>
//                         <h5><i class="fas fa-calendar-check"></i> Book Now :</h5>
//                         <form id="regForm" name="submit-to-google-sheet">
//                              <input name="Tour Title" id="title" type="text" required=""
//                                  value="${values.tour_title}" hidden>
//                              <div class="form-content">
//                                  <label for="name">Name <span style="color: red;">*</span></label>
//                                  <input name="Name" id="${values.tour_id}namevalue" type="text" required=""
//                                      placeholder="Enter your name">
//                              </div>
//                              <div class="form-content">
//                                  <label for="email">Email <span style="color: red;">*</span></label>
//                                  <input name="Email" type="email" required=""
//                                      placeholder="Enter your email">
//                              </div>
//                              <div class="form-content">
//                                  <label for="mobile">Mobile Number <span
//                                          style="color: red;">*</span></label>
//                                  <input name="Phone" type="tel" pattern="[7-9]{1}[0-9]{9}" required=""
//                                      placeholder="Enter mobile number">
//                              </div>
//                              <div class="form-content">
//                                  <label for="guestCount">Number of Guest <span
//                                          style="color: red;">*</span></label>
//                                  <input name="Number of Guest" type="number" required=""
//                                      placeholder="Number of Guest">
//                              </div>
//                              <div class="form-content submit-btn" style="margin-top: 10px;">
//                                  <button onclick="${values.tour_id}nameText()" class="btn btn-light submit " id="${values.tour_id}submit"
//                                      title="Submit"> Book Now</button>
//                              </div>
//                         </form>
//                     </div>
//                     <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary"
//                             data-bs-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             <!-- Form Type Package Title Package Image Days Places Content Timestamp -->
//     <script>
//         const scriptURL =
//             'https://script.google.com/macros/s/AKfycbyiYhIPCX0T1oiY1UPqwy_g-S08BODVPZhQSulBpQsi1D6hyd3ZhCM1UWTT7wVsnCxdbQ/exec'
//         const form = document.forms['submit-to-google-sheet']

//         form.addEventListener('submit', e => {
//             e.preventDefault()
//             fetch(scriptURL, {
//                     method: 'POST',
//                     body: new FormData(form)
//                 })
//                 .then(response => {
            
//                     console.log('Success!', response);
//                     // form.reset();
//                 })
//                 .catch(error => console.error('Error!', error.message))
//         })
//     </script>
//         `;
//         });
//         document.getElementById("results").innerHTML = content;
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });