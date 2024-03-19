import './style.css'


const CreatePreview = (props) => {

    const {previewData} = props;

    const data = Object.keys(previewData)

    return (
        <div className='preview-container mt-3 mr- overflow-scroll'>
        {data.map((dataItem, index) => {
            // return <p key={dataItem} id={dataItem}>{previewData[dataItem]}</p>
            if (index === 0) {
                return <h3 key={dataItem} className='preview-item' id={dataItem}>{previewData[dataItem]}</h3>;
            } else {
                return <p key={dataItem} className='preview-item' id={dataItem}>{previewData[dataItem]}</p>;
            }
        
        })}
        </div>
    )
}

export default CreatePreview;