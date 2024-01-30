import './App.css';
import { useState } from 'react'
import classnames from 'classnames';

import MainThree from './MainThree';
import { Nav, NavItem, NavLink, TabContent, TabPane, } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  const [activeTab, setActiveTab] = useState('1');
  const [suitAttributes, setSuitAttributes] = useState({
    Lapel_style: 'notch',
    Lapel_width: 'narrow',
    Lapel_button_hole: 'Traditional',
    AMF_Size: 'mm2',
    Shoulder: 'Natural_Shoulder_0mm',
    Chest_Pocket: 'Boat_Shape',
    Side_Pocket: 'Flap001',
    Sleeve_Buttons: 'kissing_3'
  });

  const toggletab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <div className='main-container'>
        <MainThree Sleeve_Buttons={suitAttributes.Sleeve_Buttons} Side_Pocket={suitAttributes.Side_Pocket} Chest_Pocket={suitAttributes.Chest_Pocket} Lapel_style={suitAttributes.Lapel_style} Lapel_width={suitAttributes.Lapel_width} Lapel_button_hole={suitAttributes.Lapel_button_hole} AMF_Size={suitAttributes.AMF_Size} Shoulder={suitAttributes.Shoulder} />
        <div className='customize-suit'>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggletab('1'); }} >
                  Lapel_style
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })} onClick={() => { toggletab('2'); }}>
                  Lapel width
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })} onClick={() => { toggletab('4'); }}>
                  Lapel button hole
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '5' })} onClick={() => { toggletab('5'); }}>
                  AMF
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '6' })} onClick={() => { toggletab('6'); }}>
                  Shoulders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '7' })} onClick={() => { toggletab('7'); }}>
                  Chest Pocket
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '8' })} onClick={() => { toggletab('8'); }}>
                  Side Pocket
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '9' })} onClick={() => { toggletab('9'); }}>
                  Sleeve Buttons
                </NavLink>
              </NavItem>
            </Nav>
          </div>


          <TabContent activeTab={activeTab}>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="product-container">
                  <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_style: 'notch' }))}>
                    <h2 className="option-title">Notch</h2>
                    <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/LN1" alt="Natural" />
                    <p className="option-description">The most standard and versatile lapel works well for any occasion.</p>
                  </div>
                  <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_style: 'concave' }))}>
                    <h2 className="option-title">Concave</h2>
                    <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/LNH3" alt="Natural" />
                    <p className="option-description">A slightly widened notch lapel that features a subtle curvature.</p>
                  </div>
                  <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_style: 'peak' }))}>
                    <h2 className="option-title">Peak</h2>
                    <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/LP2" alt="Natural" />
                    <p className="option-description">Peak lapels broaden the shoulders and are more angular with a bold upward peak.</p>
                  </div>
                </div>
              </TabPane>
            </TabContent>


            <TabPane tabId="2">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_width: 'narrow' }))}>
                  <h2 className="option-title" >Narrow</h2>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/LWS2" alt="Natural" />
                  <p className="option-description">Our Narrow notch lapels measure in at 8.5cm while Narrow peak lapels are 8.9cm</p></div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_width: 'standard' }))}>
                  <h2 className="option-title" >Standard</h2>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/LWS2" alt="Natural" />
                  <p className="option-description">Standard Notch lapels measure in at 9.2cm while our standard Peak is 9.8cm and Concave lapel is 11.5cm.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_width: 'wide' }))}>
                  <h2 className="option-title"  >Wide</h2>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/LWW3" alt="Natural" />
                  <p className="option-description">Our wide notch lapels measure in at 11.5cm while wide peak lapels are 11.8cm.</p>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_button_hole: 'Traditional' }))}>
                  <h2 className="option-title">Traditional</h2>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/custommade/thumbs2/Jacket/BHFUNC1" alt="Natural" />
                  <p className="option-description">The traditional lapel buttonhole, or boutonniere, is used today as a way to place flowers on the lapel.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Lapel_button_hole: 'Handmade' }))}>
                  <h2 className="option-title">Handmade</h2>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/custommade/thumbs2/Jacket/BHMIL2" alt="Natural" />
                  <p className="option-description">This hand-sewn lapel buttonhole is a subtle, yet distinguished, accent with a sartorial history.</p>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="5">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, AMF_Size: 'mm2' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/HAMF2mm2" alt="Natural" />
                  <h2 className="option-title">2mm</h2>
                  <p className="option-description">Found along the edges of the hem, pockets and lapel to prevent fabric curling.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, AMF_Size: 'mm6' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/HAMF6mm3" alt="Natural" />
                  <h2 className="option-title">6mm</h2>
                  <p className="option-description">Found 6mm in, along the edges of the hem, pockets and lapel to prevent fabric curling.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, AMF_Size: 'None' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/HAMFNO1" alt="Natural" />
                  <h2 className="option-title">No</h2>
                  <p className="option-description">Crafted with traditional stitching, not AMF stitching</p>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="6">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Shoulder: 'Natural_Shoulder_0mm' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SS3" alt="Natural" />
                  <h2 className="option-title">Natural Shoulder</h2>
                  <p className="option-description">This natural shoulder joins the sleeve head underneath the shoulder seam for a more shirt-like fit.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Shoulder: 'Natural_Shoulder_2mm' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SNP7" alt="Natural" />
                  <h2 className="option-title">Natural Pleated</h2>
                  <p className="option-description">This natural shoulder offers a softer silhouette & features small handmade pleats along the armhole seam.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Shoulder: 'Natural_Shoulder_5mm' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SNA6" alt="Natural" />
                  <h2 className="option-title">Natural</h2>
                  <p className="option-description">The highly versatile natural shoulder features minimal padding for a balanced finish.</p>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="7">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Chest_Pocket: 'Boat_Shape' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/CPBS2" alt="Natural" />
                  <h2 className="option-title">Boat Shape</h2>
                  <p className="option-description">Named after the Italian word for "little boat", barchetta pockets are subtly curved chest pockets.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Chest_Pocket: 'Patch' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/CPPA2" alt="Natural" />
                  <h2 className="option-title">Patch</h2>
                  <p className="option-description">Chest patch pockets offer a more easygoing and practical alternative to more formal options.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Chest_Pocket: 'Rounded' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/CPRP4" alt="Natural" />
                  <h2 className="option-title">Rounded Patch</h2>
                  <p className="option-description">Chest patch pockets offer a more casual alternative to more formal options—this style is rounded</p>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="8">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Side_Pocket: 'Flap001' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SPF5.5" alt="Natural" />
                  <h2 className="option-title">Standard Flap (5.5cm)</h2>
                  <p className="option-description">This style features a standard 5.5cm flap of fabric over a jetted pocket which can be let out or tucked in.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Side_Pocket: 'Slanted_Flap001' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SPF7" alt="Natural" />
                  <h2 className="option-title">Large Flap (7cm)</h2>
                  <p className="option-description">This style features a large 7cm flap of fabric over a jetted pocket which can be let out or tucked in.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Side_Pocket: 'Jetted001' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SPJ4" alt="Natural" />
                  <h2 className="option-title">Jetted</h2>
                  <p className="option-description">Formal and sleek, jetted pockets are defined by a fine trimmed slit cut into the fabric.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Side_Pocket: 'Patch001' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SPPA5" alt="Natural" />
                  <h2 className="option-title">Patch</h2>
                  <p className="option-description">A sportier take on the more typical flap pocket, patch pockets offer a more relaxed appeal.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Side_Pocket: 'Rounded_Patch' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_800,q_auto:good,w_800/custommade/thumbs2/Jacket/SPRP7" alt="Natural" />
                  <h2 className="option-title">Round Patch</h2>
                  <p className="option-description">This take on the casual patch pocket features a curved bottom</p>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="9">
              <div className="product-container">
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Sleeve_Buttons: 'kissing_3' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/custommade/thumbs2/Jacket/SB3KB1" alt="Natural" />
                  <h2 className="option-title">3 kissing buttons</h2>
                  <p className="option-description">These 3 kissing buttons are slightly overlapping for a sartorial accent.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Sleeve_Buttons: 'kissing_4' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/custommade/thumbs2/Jacket/SB4KB2" alt="Natural" />
                  <h2 className="option-title">4 kissing buttons</h2>
                  <p className="option-description">These 4 kissing buttons are slightly overlapping for a sartorial accent.</p>
                </div>
                <div className="product-option" onClick={() => setSuitAttributes(prevState => ({ ...prevState, Sleeve_Buttons: 'kissing_5' }))}>
                  <img className="option-image" src="https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/custommade/thumbs2/Jacket/SB5KB4" alt="Natural" />
                  <h2 className="option-title">5 kissing buttons</h2>
                  <p className="option-description">These 5 kissing buttons are slightly overlapping for a sartorial accent.</p>
                </div>
              </div>
            </TabPane>
          </TabContent>

        </div>

      </div>

    </>
  );
}

export default App;
