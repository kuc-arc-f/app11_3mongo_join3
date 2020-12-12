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
                bread : {this.props.obj.name} <br />
                num: {this.props.obj.order_num } <br />
                Price: {price_total} JPY<br />
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

