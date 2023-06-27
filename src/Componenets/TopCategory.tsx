import "./Style/TopCategory.css"


const TopCategory = () =>{

    const category: Array<string> = ["Rice", "Beans", "Birds", "Fish", "Steaks"]

    return(
        <div className="top-category">
        {category.map((cat: string, index: number) => (

                <h4 key={index}>{cat}</h4>

                )
            )}

        </div>
    )

}

export default TopCategory