class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
        return (
        <tr>
            <td>
                <a href={"/breads/show/"+ this.props.obj._id}><h3>{this.props.obj.name}</h3>
                </a>
                {this.props.obj.created_at }<br />
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

