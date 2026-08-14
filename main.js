function feedData(data) {
    var htmlCode = `<!DOCTYPE html><html lang="hi">    <head>        <title>PDF</title>        <meta charset="utf-8">        <meta name="viewport" content="width=device-width, initial-scale=1">        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">         <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">        <script>
        // This script will execute window.print() once the page loads.
        
    </script>             </head>
  <style type="text/css">
           body{
      font-family: 'Roboto', sans-serif;
    }
    h1, h2, h3, h4{
      font-family: 'Open Sans', sans-serif;
    }
    .clr{
      clear: both;
    }
    .pdf{
      /*width: 650px;*/
      width: 680px;
      height: 845px;
      border: solid 2px;
      margin: 10% auto;
    }
    .left{
      width: 48.7%;
      float: left;
      border-right: solid 2px;
      height: 100%;
    }
    .right{
      width: 48.8%;
      float: left;
      border-left: solid 2px;
      height: 100%;
    }
    .cntr{
      float: left;
      
    }
    img{
      width: 100%;
    }
    .img4{
      /*
      border-bottom: solid #e70000;
      */
    }
    p{
      font-size: 12px;
      text-align: center;
      margin: 0;
    }
    .rtt{
      float: left;
      width: 15%;
    }
    .rtt_rt{
      float: left;
        width: 146%;
        padding-left: 18%;
        margin-top: -10%;
    }
    .rtt p, .brcd p{
      transform: rotate(90deg);
      margin-top: 25px;
      font-size: 9px;
      font-weight: bold;
    }
    ul li{
      font-size: 10px;
      list-style: none;
      line-height: 11px;
    }
    ul{
      padding: 0;
      margin-top: 5px;
    }
    .vld{
      float: left;
      width: 52%;
      text-align: right;
    }
    .brcd{
      float: left;
      width: 26%;
      background: url("images/q.jpg") no-repeat;
      background-size: 50px;
      margin-top: 100px;
      padding-left: 15px;
      background-position-x: center;
    }
    .brcd.print {
        display: list-item;
        list-style-image: url("images/q.jpg");
        list-style-position: inside;
    }
    .prnt{
        position: absolute;
        margin-top: -60px;
    }
    .vld img{
      width: 153px;
    padding-top: 32px;
    }
    h4 span, h2 span{
      color: #e70000;
    }
    h4{
      font-size: 14px;
      text-align: center;
      padding-top: 20px;
      margin: 0;
    }
    h3{
      margin: 0 0 4px;
      text-align: center;
    }
    h3 span{
      border-bottom: solid 0;
    }
    h2{
      text-align: center;
      font-size: 18px;
      letter-spacing: 1px;
      font-weight: 500;
      margin: 0;
      border-bottom: solid #e70000;
    }
    .img2{
     /*
      border-top: dashed 1px;
      */
     margin-top: 0.5px;
     padding: 5px 0;
    }

    img.cut-008 {
    height: 8px;
}

    .a_lft{
    width: 20%;
    float: left;
    padding: 0 15px;
    padding-left: 24px;
    }
    .a_rgt{
      width: 68%;
      float: left;
    }
    .a_rgt ul{
      margin-top: 0;
      margin-bottom: 0;
    }
    .a_rgt img{
        width: 75px;
        float: right;
        position: absolute;
        margin: 25px 140px 0;
    }
    .adhr h2{
      font-size: 14px;
      border-top: solid #e70000 2px;
      border-bottom: 0;
    }
    .adhr p{
      font-size: 10px;
    }
    .adhr h3{
      font-size: 16px;
    }
    .img6{
      margin-top: px;
      height: 23px;
    }
    .adhr .brcd {
      width: 5%;
    }
    .adhr .brcd p {
        font-size: 6px;
        margin-top: 10px;
    }
    .b_rgt{
      width: 36%;
      float: right;
    }
    .b_lft{
      width: 64%;
      float: left;
    max-height: 112px;
    margin-top: 0%;
    }
    .adhr2 ul li{
      font-size: 10px;
      line-height: 10px;
    }
    .adhr2 ul{
      padding: 0;
      margin: 0;
      margin-bottom: 8px;
      margin-left: 10px;
    }
    .adhr2 ul li span{
      font-weight: bold;
    }
    .blank{
      min-height: 124px;
    }
    .adhr h3 span{
      border-bottom: solid 0px;
    }
    .cut{
      width: 12px;
      position: absolute;
      padding: 2px 0px 0px 5px;
    }
    .cut2{
      position: absolute;
      width: 8px;
      margin: 8px 0 0 -4px;
    }
    .brcd h5{
      margin: 0;
      font-weight: normal;
      font-size: 12px;
    }
    .brcd ul li{
      font-size: 7px;
      line-height: 8px;
    }
    .one{
        height: 500px;
    }
    .two{
        height: 110px;
    }
     .three{
        height: 178px;
    position: relative;
    margin-top: -11px;
    }
    .rtt_rt ul{
        width: 45%;
    }
    .info h4{
        color:#f60000;
        letter-spacing: .5px;
        text-transform: uppercase;
        font-size: 12px;
        padding-top: 10px;
    }
    .info ul li, .info2 ul li{
        font-size: 11px;
        line-height: 16px;
    }
    .info ul li span, .info2 ul li span{
        color:#f60000;
    }
    .info2 ul li{
        padding: 4px 0;
    }
    .info2, .info{
        padding: 0 20px;
    }
    .info li::before, .info2 li::before {
      content: "■";
      color: #D60F26;
      font-size: 12px;
      padding-right: 5px;
    }
    .info2 ul{
        border: solid 1px #666;
        padding: 5px;
    }
    .info2{
        padding: 0 15px;
    }
    .info2 ul li .brk, .info ul li .brk{
        color: #333;
        padding-left: 12px;
    }
    .img7{
        border-top: solid #e70000 2px;
        height: 18px;
        padding-top: 2px;
    }

    img.img2.img--013 {
    padding: 1;
    width: 332px;
    padding-left: 1px;
   }
   img.img6.image--010 {
    border: 0px;
    padding: 0px;
}
.right img.cut-008 {
    margin-left: 1px;
}

img.cut-verti {
    height: 841px;
    width: 10px;
}

p.download-date {
    font-weight: bold;
    transform: rotate(90deg);
    font-size: 7px;
    position: absolute;
    top: 97px;
    left: -31px;
}

p.download-date.issue {
    right: -314px;
     }
     .instruction-box {
    border: 1.1px solid #e43636; /* Red border */
    padding: 0.5px; /* Increased padding for better spacing */
    margin-top: 3px; /* Space above the box */
    background-color: #ffffff; /* Light background color */
    width: 97%; /* Full width */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    text-align: left; /* Align text to the left */
    margin-bottom: 10px; /* Adjust the value as needed */
    position: relative; /* Ensure it is positioned relative to its parent */
    z-index: 1; /* Bring it to the front */
}

/* Additional style to remove left padding */
.instruction-box p {
    margin: 0; /* Remove default margin */
    padding-left: 0; /* Remove left padding */
}
    </style>
    <body>
        <div class="pdf">
            <div class="left">
                <div class="one">
                    <img src="images/image--001.jpg">
                    <p> नामांकन क्रम / Enrollment No: 4892/89659/4127 2390 </p>
                    <div class="rtt">
                        <p>Download&nbsp;Date:&nbsp;28/10/2025</p>
                        <div class="clr"></div>
                    </div>
                    <div class="rtt_rt">
                        <ul>
                            <li>To</li>
                            <li>${data.name_hindi}</li>
                            <li>${data.name_english}</li>
                            <li>${data.address_english}</li>
                        </ul>
                        <div class="clr"></div>
                    </div>
                    <div class="rtt">
                        <p style="margin-top: 77px;">Issue&nbsp;Date:&nbsp;28/09/2025</p>
                        <div class="clr"></div>
                    </div>
                   <div class="brcd print">
    <div class="prnt">
        <h5>Signature Valid</h5>
        <ul>
            <li>Digitally signed by DS</li>
            <li>UNIQUE IDENTIFICATION</li>
            <li>AUTHORITY OF INDIA 03</li>
            <li id="currentDate"></li>
            <li>IST</li>
        </ul>
   </div>
<script>
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

 // FIX: Escaped the backticks and dollar signs here
 return \`\${year}\.\${month}\.\${day} \${hours}:\${minutes}:\${seconds}\`;
    
    }

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    document.getElementById('currentDate').textContent = 'Date: ' + formattedDate;
</script>
                        <div class="clr"></div>
                    </div>
                    <div class="vld">
                        <img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=<?xml version="1.0" encoding="UTF-8"?><PrintLetterBarcodeData uid="${data.aadhar_number_raw}" name="${data.name_english}" gender="${data.gender_english}" dob="${data.dob}" address="${data.address_english}"/>' title="" />

                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>
                </div> <div class="two">
                    <img src="images/image--002.png" class="aapka-aadhar">
                    <h3><span>${data.aadhar_number_formatted}</span></h3>
                    <img src="images/image--003.png" class="meri-image">
                </div>  <div class="adhr">
                    <img src="images/image--008.png" class="cut-008">
                    <div class="three">
                        <p class="download-date">Download&nbsp;Date:&nbsp;28/10/2025</p>
                        <img src="images/image--009.jpg" class="img2">
                        <div class="a_lft">
                                 <img src="${data.photo_base64}" />
                                </div>
                        <div class="a_rgt">
                            <ul>
                                <li>${data.name_hindi}</li>
                                <li>${data.name_english}</li>
                                <li>जन्म तिथि / DOB : ${data.dob}</li>
                                <li>${data.gender_hindi} / ${data.gender_english}</li>
                    <div class="instruction-box">
    <p style="font-size: 7.8px;">
        <strong>
            आधार पहचान का प्रमाण है, नागरिकता या जन्मतिथि का नहीं।
        </strong>
        इसका उपयोग सत्यापन (ऑनलाइन प्रमाणीकरण, या क्यूआर कोड/ऑफ़लाइन एक्सएमएल की स्कैनिंग) के साथ किया जाना चाहिए.
        </p>
    <p style="font-size: 7.8px; margin-top: 4px;">
        <strong>
            Aadhaar is proof of identity, not of citizenship <br> or date of birth.
        </strong>
        It should be used with verification (online authentication, or scanning of QR code / offline XML).
    </p>
</div>


                        </div>

                    </div>  <h3><span>${data.aadhar_number_formatted}</span></h3>
                    <img src="images/image--010.jpg" class="img6 image--010">
                </div>
                <div class="clr"></div>
            </div>
            <div class="cntr">
                <img src="images/image--004.png" class="cut-verti">
                <div class="clr"></div>
            </div>
            <div class="right">
                <div class="one">
                    <img src="images/image--005.jpg" class="img4">
                    <img src="images/image--006.jpg" class="img4">
                  </div> <div class="two"></div>
                <div class="adhr adhr2">
                    <img src="images/image--012.png" class="cut-008">
                    <div class="three">
                        <img src="images/image--013.jpg" class="img2 img--013">
                        <div class="b_lft">
                            <ul>
                                <li><span>पता:</span></li>
                                <li>${data.address_hindi}</li>
                            </ul>
                            <ul>
                                <li><span>Address:</span></li>
                                <li>${data.address_english}</li>
                            </ul>
                        </div>
                        <div class="b_rgt">
                            <img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=<?xml version="1.0" encoding="UTF-8"?><PrintLetterBarcodeData uid="${data.aadhar_number_raw}" name="${data.name_english}" gender="${data.gender_english}" dob="${data.dob}" address="${data.address_english}"/>' >
                        </div>
                        <div class="clr"></div>
                    </div>  <h3><span>${data.aadhar_number_formatted}</span></h3>
                    <img src="images/image--015.png" class="img6">
                </div>
                <div class="clr"></div>
            </div>
            <div class="clr"></div>
        </div>
        <div class="clr"></div>

        <script>
            /**
             * This function executes once the entire page, including all content, is loaded.
             * It selects the <body> element and stores its *inner* HTML content into a variable.
             */
            document.addEventListener('DOMContentLoaded', (event) => {
                // Get the <body> element
                const bodyElement = document.body;

                // Store the entire HTML content *inside* the body into a variable
                const htmlContent = bodyElement.innerHTML;

                // You can now use the 'htmlContent' variable, e.g., send it to a server
                // console.log(htmlContent);

                // --- OPTIONAL: Store only the content of the PDF container ---
                // const pdfElement = document.querySelector('.pdf');
                // if (pdfElement) {
                //     // FIX: Escaped the backticks and dollar signs here
                //     const pdfHtmlContent = pdfElement.outerHTML; // Use outerHTML to include the .pdf div itself
                //     // console.log(pdfHtmlContent);
                // }
            });
        </script>

    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"d6e0c0f3bd3846d98458e3b8c69af270","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script></body></html>`;

    const wind = window.open("about:blank", "_blank");
    wind.document.write(htmlCode);
    setTimeout(function () {
        wind.print();
    }, 2200);
}

function logData(doc) {
    console.log(doc);
    // Newlines remove karne ke liye helper function
    const sanitizeAddress = val => {
        return val ? val.replace(/[\r\n]+/g, " ").trim() : "";
    };

    const rawDob = doc.dob;
    let formattedDob = "N/A";
    if (rawDob) {
        const parts = rawDob.split("-"); // rawDob is YYYY-MM-DD
        formattedDob = `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
    }

    // 3. Process Aadhar Number (Add space after every 4 digits)
    const rawAadhar = doc.id_num.replace(/[^0-9]/g, ""); // Remove non-digits
    const formattedAadhar = rawAadhar.match(/.{1,4}/g)?.join(" ") || rawAadhar;


  
    const data = {
        // English Details
        name_english: doc.name_en,
        gender_english: doc.gender.split("/")[0],
        address_english: sanitizeAddress(doc.address_en),
        address_english_encoded: encodeURIComponent(doc.address_en),

        // Hindi Details
        name_hindi: doc.name_hi,
        gender_hindi: doc.gender.split("/")[1], // CALCULATED VALUE
        address_hindi: sanitizeAddress(doc.address_hi),
        address_hindi_encoded: encodeURIComponent(doc.address_hi),

        // Common Details
        dob: formattedDob, // DD/MM/YYYY format
        aadhar_number_formatted: formattedAadhar, // XXXX XXXX XXXX format
        aadhar_number_raw: rawAadhar,

        // Photo Details
        photo_base64: doc._photoUrl.href, // Base64 string
    };
    feedData(data);
}
