import './since.css';
import work from '../../images/unsplash_bzqU01v-G54.png';
import play from '../../images/play-rounded-button 1.png';
function Since() {

    return (
        <div class='since'>
            <div className='workimage'>
                <img src={work} />
                <img src={play} className='play' />
            </div>
            <div className='sincetext'>
                <div className='digproduct'>
                    <div className='pixel'></div>
                    <div className='SinceTexts'>
                        <div className='sincetext2'><b>Great Digital Product Agency since 2016 </b></div>
                        <div className='sincetext3'>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Since;