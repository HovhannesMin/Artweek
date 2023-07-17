import './hero.css';
import image from '../../images/image 8.png';
function Headline() {
    return (
        <div className='headline'>
            <div className='texts'>
                <div>
                    <h1><b>A Digital Product Agency</b></h1>
                </div>
                <div className='text'>
                    <p className='Ptext'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                </div>
                <div className='ContactNow'>
                    <h2 className='contact'>Contact Now</h2>
                </div>
            </div>
            <div className='image'>
                <img src={image} className='headlineimage'/>
            </div>

        </div>
    );
}

export default Headline;