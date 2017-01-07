  
function showAll2(){
	document.getElementById('more').style.visibility='visible';
    document.getElementById('sA').style.visibility='visible';
    document.getElementById('sA2').style.visibility='visible';
	document.getElementById("testing").innerHTML = " ";
    document.getElementById('s1').style.visibility='visible';
    document.getElementById('s2').style.visibility='visible';
    document.getElementById('s3').style.visibility='visible';
    document.getElementById('s4').style.visibility='visible';
    document.getElementById('s5').style.visibility='visible';
    document.getElementById('s6').style.visibility='visible';
    document.getElementById('s7').style.visibility='visible';
}

function showAll(){
  var x = document.getElementsByClassName("shh");
  x[0].style.display = "block";
  x[1].style.display = "block";
  x[2].style.display = "block";
  x[3].style.display = "block";
  x[4].style.display = "block";
  x[5].style.display = "block";
  x[6].style.display = "block";
  x[7].style.display = "block";
  x[8].style.display = "block";

  

  


}

 function mInfo1(){
    showAll();
    
    document.getElementById("testing").innerHTML = " ";
    document.getElementById("Lt").innerHTML = "Foster Parent - Relative ";
    document.getElementById("Ld").innerHTML = "After you are placed in foster care, your state will try to notify your adult relatives. Most states prefer to have you live with relatives versus non-relatives. But before your relatives can get money from the foster system, they must first show they are “fit and willing” to take care of you. This may include a home visit and/or having all members of the household undergo a criminal background check. ";
    document.getElementById('Li').src="Relative.png";
    document.getElementById('head2').style.visibility='visible';
  

   }


   function mInfo2(){
    document.getElementById("testing").innerHTML = '<strong>"Finding Family Through Foster Care" </strong> <br> <img src="Melissa.jpg" class="img-fluid"> <br> <br> <audio controls> <source src="Non-Relative Foster Family_Foster Youth Voices_Being In Foster Care Made Me Stronger_Melissa Beavers.mp3" type="audio/mpeg"> </audio> <br> Youth Radio reporter Melissa Beavers, 22, was in elementary school when she was placed in foster care. She says her former foster mother was the parent she always dreamed of.';

   showAll();
    document.getElementById("Lt").innerHTML = "Foster Family - Non-Relative";
    document.getElementById("Ld").innerHTML = "You may be placed with a foster parent who is not related to you. Adults who are at least 21 years old, have passed a background check, and are able to meet their basic financial needs are eligible to be foster parents. Technically, foster parents are not “paid.” They are “reimbursed” by the government for the cost of caring for you (<a href='http://www.childtrends.org/wp-content/uploads/2013/04/Foster-Care-Payment-Rate-Report.pdf' target='_blank'>rates vary by state</a>). In several states, there is a <a href='http://fcni.org/new_site/blog/rethinking-foster-parent-recruitment-retention' target='_blank'>shortage</a> of foster parents. It can be harder for <a href='https://www.childwelfare.gov/pubPDFs/s_disrup.pdf' target='_blank'>some kids</a>, like <a href='https://www.acf.hhs.gov/sites/default/files/cb/cbcongregatecare_brief.pdf' target='_blank' >older youth</a> and children with emotional and physical issues, to find foster families.";
    document.getElementById('Li').src="Non-Relative.png";
    document.getElementById('head2').style.visibility='visible';

  }

   function mInfo3(){
   	showAll();
    document.getElementById("testing").innerHTML = '<strong>"When Home Feels Like a Prison"</strong> <br> <img src="noel_hub.jpg" class="img-fluid"> <br>   <br> <audio controls> <source src="Group Home_Foster Youth Voices_When Home Feels Like A Prison_Noel Anaya.mp3" type="audio/mpeg"> </audio> <br> <br> Youth Radio reporter and former foster youth Noel Anaya, now 21, spent a year in a group home when he was 12 years old. He says from the moment he got there, he felt like it was a mistake.';
    document.getElementById("Lt").innerHTML = "Group Home";
    document.getElementById("Ld").innerHTML = "If you are placed in a foster group home, that means instead of living with a family, you live with up to 12 other foster kids with adults watching over you at all times. You could end up here for a number of reasons. Maybe you <a href='http://www1.uwindsor.ca/people/gorey/system/files/ChildYouthCareForum2016.pdf' target='_blank'> got in trouble with the law</a>,  or you have <a href='https://www.childwelfare.gov/topics/outofhome/group-residential-care/' target='_blank'>emotional, medical or mental health needs </a>. Group homes are usually not the first choice for foster kids, and some have been rocked by <a href='https://thinkprogress.org/how-south-carolinas-foster-care-system-is-failing-the-most-vulnerable-kids-fcf2c4d0dccf#.kcsstbk31' target='_blank'>scandals </a>. In 2016, <a href='https://www.propublica.org/documents/item/1698860-ccr-legislativereport' target='_blank'>California</a> passed legislation aiming to <a href='https://www.propublica.org/article/california-passes-group-home-legislation-foster-families-troubled-youth' target='_blank'>improve group homes and recruit more families</a> to take in foster kids.";
    document.getElementById('Li').src="Group Home.png";
    document.getElementById('head2').style.visibility='visible';



  

   }

      function mInfo4(){
      	showAll();
        document.getElementById("testing").innerHTML = " ";

        document.getElementById("Lt").innerHTML = "Institution";
        document.getElementById("Ld").innerHTML = "It sound clinical, but a foster care “institution” is pretty much a larger type of group home, for example, a treatment facility or emergency shelter.   If you are placed in a shelter, your stay may last anywhere from a <a href='http://ahum.assembly.ca.gov/sites/ahum.assembly.ca.gov/files/hearings/062811-BarthInstitutionsvFosterHomes.pdf' target='_blank'>couple of hours to several months</a>. Like group homes, institutions tend to be filled with <a href='http://ahum.assembly.ca.gov/sites/ahum.assembly.ca.gov/files/hearings/062811-BarthInstitutionsvFosterHomes.pdf' target='_blank'>older children</a>, who are harder to place with foster families.";
        document.getElementById('Li').src="shelter.png";
        document.getElementById('head2').style.visibility='visible';
  
           }

function mInfo5(){
	showAll();
	document.getElementById("testing").innerHTML = " ";
  document.getElementById("Lt").innerHTML = "Pre-adoptive Home";
  document.getElementById("Ld").innerHTML = "If you can’t go back to your biological parents, your case managers may try for adoption. Even if a family is interested in adopting you, you’ll need to do a “pre-adoptive placement” in their home as a kind of trial period.  Not all pre-adoptive placements lead to adoptions. <a href='http://www.ncsl.org/documents/cyf/movingchildrenoutofcare.pdf' target='_blank'>Ten to 25</a> percent of pre-adoptive placements <a href='http://www.ncsl.org/documents/cyf/movingchildrenoutofcare.pdf' target='_blank'>“disrupt”</a> before the adoption is finalized. And another ten percent of adoptions <a href='https://www.childwelfare.gov/pubPDFs/s_disrup.pdf' target='_blank'>dissolve</a>, which sends you back into foster care.";
  document.getElementById('Li').src="Preadoptivehome_new.png";
  document.getElementById('head2').style.visibility='visible';

   }
    

    function appearR(){
        //var copy ="Even if you live in a state that has extended foster care benefits, your time in foster care won’t last forever. In <a href=’http://www.ncsl.org/research/human-services/extending-foster-care-to-18.aspx' target='_blank'>nearly all of those states </a>, you’ll “age out” by the time you reach 21. In California, for example, that means you’ll lose your guaranteed housing placement, living stipend, and access to your court-appointed lawyer. There are <a href=’http://thpplus.org/’ target=’_blank’>programs</a> that can help you with some of these needs, but that depends on availability and whether <a href=’http://www.cdss.ca.gov/calworks/’ target=’_blank’>you have children</a>. However, you will retain your educational benefits like priority enrollment in state colleges. And under the provisions of the Affordable Care Act, you’ll also retain access to health care until you’re <a href=’http://www.ylc.org/our-work/action-litigation/aging-outtransition/medi-cal-for-former-foster-youth/’ target=’_blank’>26</a>. ";

      document.getElementById('r1p').src="money_Nope.png";
      document.getElementById('r3p').src="lawNo.png";
      document.getElementById('r4p').src="house_No.png";
      //document.getElementById("resources21").innerHTML = copy;
      
      document.getElementById("videEm").innerHTML="Youth Radio's Noel Anaya entered foster care when he was two years old. He recently “aged out” of the system at age 21. He reflects on what the change will mean for him. <br> <br> <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/RfEiQqSIOsw' frameborder='0' allowfullscreen></iframe></div>";
    
    var x = document.getElementsByClassName("shh");
      x[9].style.display = "block";
      x[10].style.display = "block";
      x[11].style.display = "block";
      x[12].style.display = "block";

    }

