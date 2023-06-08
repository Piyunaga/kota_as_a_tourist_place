import TripData from "./Trip.Data";
import "./TripStyles.css";
import Trip1 from "../assests/32.jpg";
import Trip2 from "../assests/33.jpg";
import Trip3 from "../assests/34.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Udaipur"
          text="UDAIPUR 
          THE CITY OF LAKES AND PALACES
          Often referred to as the 'Venice of the East', the city of lakes Udaipur is located around azure water lakes and is hemmed in by lush green hills of Aravallis. The famous Lake Palace, located in the middle of Lake Pichola is one of the most beautiful sights of Udaipur. It is also home to Jaisamand Lake, claimed to be the second largest man-made sweet water lake in Asia. The beautiful City Palace and Sajjangarh (Monsoon Palace) add to the architectural beauty and grandeur of the city. The city is also known for its profusion of zinc and marble. Solar observatory in Lake Fateh Sagar is the only observatory in India located on an island and has been made on the pattern of  Big Bear Lake in Southern California. The ten-day Shilpgram Festival which starts from 21 Dec to 30 Dec pulls in a large number of people interested in arts and crafts.
          Udaipur was founded in 1553 by Maharana Udai Singh II as the new capital of Mewar Kingdom. It is located in the fertile, circular Girwa Valley to the southwest of Nagda, which was the first capital of Mewar."
        />
        <TripData
          image={Trip2}
          heading="Trip in Jaipur"
          text="JAIPUR 
          THE PINK CITY
          Jaipur Sightseeing and other RTDC Tours
          
          Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.
          The story goes that in 1876, the Prince of Wales visited India on a tour. Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire city pink. The pink that colours the city makes for a marvellous spectacle to behold. Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple.
          Jaipur traces back its origins to 1727 when it was established by Jai Singh II, the Raja of Amber. He shifted his capital from Amber to the new city because of the rapidly-growing population and an increasing water scarcity. Noted architect Vidyadhar Bhattacharya used the established principles of Vastu Shastra to build the city"
        />
        <TripData
          image={Trip3}
          heading="Trip in Jodhpur"
          text="JODHPUR 
          A DELIGHTFUL BLEND OF THE MODERN AND THE TRADITIONAL
          Jodhpur, the second largest city in Rajasthan is popularly known as the Blue City. The name is clearly befitting as most of the architecture – forts, palaces, temples, havelis and even houses are built in vivid shades of blue. The strapping forts that tower this magnificent city sum up to a spectacle you would not want to miss. The mammoth, imposing fortress of Mehrangarh has a landscape dominating a rocky ridge with the eight gates leading out of the fortress. The new city is located outside the structure. Jodhpur is also known for the rare breed of horses known as Marwari or Malani, which are only found here.
          Jodhpur marks its origin back to the year of 1459 AD. The history of this prosperous city revolves around the Rathore clan. Rao Jodha, the chief of Rathore Clan is credited with the origin of Jodhpur in India. The city is known to be built in place of the ancient capital, Mandore of the state of Manwar. Hence, the people of Jodhpur and surrounding areas are commonly known as Marwaris. Also, it is believed that the relics of Mandore can still be witnessed in the Mandore Gardens."
        />
      </div>
    </div>
  );
}
export default Trip;
