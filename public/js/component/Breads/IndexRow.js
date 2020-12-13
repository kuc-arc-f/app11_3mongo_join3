class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
console.log(this.props.obj.category[0] )
        var category_name = "";
        if(this.props.obj.category.length > 0){
            category_name = this.props.obj.category[0].name ;
        }
        return (
        <tr>
            <td>
                <a href={"/breads/show/"+ this.props.obj._id}><h3>{this.props.obj.name}</h3>
                </a>
                Category: {category_name}<br />
                {this.props.obj.created_at }<br />
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

