import './happyclient.css';
import man from '../../images/unsplash_MTZTGvDsHFY.png';
import profiles from '../../images/profiles.png';
import blueshape from '../../images/Ellipse 88.png';
import whiteshape from '../../images/Ellipse 89.png';
function Happyclient() {
    return (
        <div className='happyclient'>
            <div>
                <div className='headtext'>
                    <b>What our happy client say</b>
                </div>
                <div className='headtextchild'>Several selected clients, who already believe in our service.</div>
            </div>
            <div className='content'>
                <div className='imageman'>
                    <img src={man} />
                    <div className='description'>
                        <b>Matthew Paul</b>
                        <div className='aboutman'>
                            Perfect, very good job! Thank you for the amazing design and work.
                            Really impressed with the high quality and quick turnaround time.
                            Highly recommend.
                        </div>
                        <div className='shapes'>
                           <img src={blueshape}  className='shape'/>
                           <img src={whiteshape} className='shape'/>
                           <img src={whiteshape} className='shape'/>
                           <img src={whiteshape} className='shape'/>
                        </div>
                    </div>
                </div>
                <div className='photos'>
                    <img src={profiles} />
                </div>
            </div>

        </div>
    )
}
export default Happyclient;