$('#aboutMe').on('click', showAboutMe );
$('#portfolio').on('click', showPortfolio );
$('#contact').on('click', showEmailForm );

$('#project1').on('click', showProject1 );
$('#project2').on('click', showProject2 );
$('#project3').on('click', showProject3 );


function showAboutMe() {
    $('#content').empty();
    $('#content').append(`
        <h3 class="center">About Me</h3>
        <div>
        <img src="https://myportfoliomedia.s3.us-east-2.amazonaws.com/profilePic.jpg" id="profile-pic">
        </div>
            <br>
        <div class="row">
            <div class="col col-sm-6" id="docLinks">
                <div class="row">
                    <div class="col-4"><a href="https://www.linkedin.com/in/jason-kitamura-7968a719b/" target="_blank" style="color: whitesmoke"><i class="fa fa-linkedin" ></i>&nbsp;LinkedIn</a></div>
                    <div class="col-4"><a href="https://github.com/Jason-Kitamura" target="_blank" style="color: whitesmoke"><i class="fa fa-github"></i>&nbsp;Github</a></div>
                    <div class="col-4"><i class="fa fa-download" ></i>&nbsp;Resume</div>
                </div>
            </div>
        </div>
        <div id="bio">
            <p><b>"Hi, My name is Jason!</b></p>
            <p> I am a recent university graduate with a business degree in economics, currently exploring the world of web development. I spent my past few summers replainting cut-down forests in Northern Ontario and Alberta! For the past 6 months I worked for a Google parter called "StrataPrime" where I provided IT infrastructure support. I am looking to dive deeper into the tech world, hence why I am taking this course!"</p>
        </div>
    `);
}
function showPortfolio() {
    $('#content').empty();
    $('#content').append(`
        <h3 class="center">Portfolio</h3>
        <div class="row">
            <div class="col-sm-9 center" id="projects">
                <div class="row">
                    <div class="col-sm-4 inputStyle" id="project1" onclick="showProject1()" style="border : whitesmoke solid thin;">Realtor App</div>
                    <div class="col-sm-4 inputStyle" id="project2" onclick="showProject2()">Farmer's Friend</div>
                    <div class="col-sm-4 inputStyle" id="project3" onclick="showProject3()">Management CMS</div>
                </div>
            </div>
        </div>
        <br>
        <div class="center">
            <a href="https://github.com/stephanieblom/myRealtor" target="_blank" id="projectLink" style="color: whitesmoke;><i class="fa fa-github"></i>&nbsp;Github Link</a>
        </div>
        <div id="projectDescription" class="center">
            This is the realtor app description
        </div>
        <div class="center" id="gifArea">
            <img src="https://myportfoliomedia.s3.us-east-2.amazonaws.com/readme.gif" id="gif">
        </div>
        <br>
    `);
}
function showEmailForm() {
    $('#content').empty();
    $('#content').append(`
        <h3 class="center">Email Me</h3>
        <br>
        <form class="contact1-form validate-form">
            <div class="row">
                <div class="col-sm-9" id="emailForm">
                    <div class="row">
                        <div class="form-group col-sm-4">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="email" class="form-control" id="userName" placeholder="John Smith" style="opacity: 0.85">
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" class="form-control" id="userEmail" placeholder="name@example.com" style="opacity: 0.85">
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="exampleFormControlInput1">Subject</label>
                            <input type="email" class="form-control" id="emailSubject" placeholder="Hello" style="opacity: 0.85">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Message</label>
                        <input type="email" class="form-control" id="emailMessage" style="opacity: 0.85">
                    </div>
                    <button id="email-Btn">Send <i class="fa fa-long-arrow-right"></i></button>
                </div>
            </div>
        </form>
    `);
}
function showProject1() {
    $('#project2').removeAttr('style', 'border : whitesmoke solid thin;');
    $('#project3').removeAttr('style', 'border : whitesmoke solid thin;');
    $('#project1').attr('style', 'border : whitesmoke solid thin;')

    $('#projectLink').removeAttr('href');
    $('#projectLink').attr('href', 'https://github.com/stephanieblom/myRealtor' );

    $('#projectDescription').empty();
    $('#projectDescription').append(`This is the realtor app description`)

    $('#gifArea').empty();
    $('#gifArea').append(`
        <img src="https://myportfoliomedia.s3.us-east-2.amazonaws.com/readme.gif" id="gif">
    `);
}
function showProject2() {
    $('#project1').removeAttr('style', 'border : whitesmoke solid thin;');
    $('#project3').removeAttr('style', 'border : whitesmoke solid thin;');
    $('#project2').attr('style', 'border : whitesmoke solid thin;')

    $('#projectLink').removeAttr('href');
    $('#projectLink').attr('href', 'https://github.com/koustub/farmerPeer' );

    $('#projectDescription').empty();
    $('#projectDescription').append(`This is the Farmer's Friend description`)

    $('#gifArea').empty();
    $('#gifArea').append(`
        <img src="https://myportfoliomedia.s3.us-east-2.amazonaws.com/farmer'sFriend.gif" id="gif">
    `);
}
function showProject3() {
    $('#project2').removeAttr('style', 'border : whitesmoke solid thin;');
    $('#project1').removeAttr('style', 'border : whitesmoke solid thin;');
    $('#project3').attr('style', 'border : whitesmoke solid thin;')

    $('#projectLink').removeAttr('href');
    $('#projectLink').attr('href', 'https://github.com/Jason-Kitamura/Homework10' );

    $('projectDescription').empty();
    $('projectDescription').append(`This is the realtor CMS description`)

    $('#gifArea').empty();
    $('#gifArea').append(`
        <img src="https://myportfoliomedia.s3.us-east-2.amazonaws.com/CMSdemo.gif" id="gif">
    `);
}