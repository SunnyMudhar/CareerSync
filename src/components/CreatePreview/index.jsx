const CreatePreview = (props) => {

    const {previewData} = props;

    const data = Object.keys(previewData)

    return (
        <>
        {data.map((dataItem) => {
            return <p key={dataItem} id={dataItem}>{previewData[dataItem]}</p>
        })}
        </>
    )
}

export default CreatePreview;