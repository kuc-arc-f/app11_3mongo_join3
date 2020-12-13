class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
// console.log(this.props.obj.breads )
        var price_total = this.props.obj.price * parseInt(this.props.obj.order_num);
        return (
        <tr>
            <td>
                Type : {this.props.obj.name} <br />
                Price /JPY: {this.props.obj.price_total} <br />
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

