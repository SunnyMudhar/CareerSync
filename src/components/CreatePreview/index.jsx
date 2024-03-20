import './style.css'


const CreatePreview = (props) => {

    const {formData} = props;

    const data = Object.keys(formData);

    return (
        <div className='preview-container mt-3 mr- overflow-scroll'>
        {data.map((dataItem, index) => {
            // return <p key={dataItem} id={dataItem}>{formData[dataItem]}</p>
            if (index === 0) {
                return <h3 key={dataItem} className='preview-item' id={dataItem}>{formData[dataItem]}</h3>;
            } else {
                return <p key={dataItem} className='preview-item' id={dataItem}>{formData[dataItem]}</p>;
            }
        
        })}
        </div>
    )
}

export default CreatePreview;