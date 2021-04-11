import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widgets.css';

const Widgets = () => {

    const newsArticle=  (headline, subtitle) => {

        return(
            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__articleRight">
                    <h4>{headline}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("LinkedIn Clone is in progress", "Top News - 5000+ readers")}
            {newsArticle("Some more news in here", "Top News - 3216 readers")}
            {newsArticle("Some not so intersting news", "Top News - 127 readers")}
            {newsArticle("Some not so intersting news", "Top News - 127 readers")}
            {newsArticle("Some not so intersting news", "Top News - 127 readers")}
            {newsArticle("Some not so intersting news", "Top News - 127 readers")}
            {newsArticle("Some not so intersting news", "Top News - 127 readers")}
            
        </div>
    )
}

export default Widgets;