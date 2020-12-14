import { useRef, useEffect } from 'react';

const useCanvas =  draw => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current 
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render() 

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return canvasRef
}
// class useCanvas extends React.Component {
//     constructor(props) {
//         super(props)
//         this.canvasRef = React.createRef();
//     }

//     componentDidMount() {
//         const canvas = this.canvasRef.current 
//         const context = canvas.getContext('2d')

//         let frameCount = 0 
//         let animationFrameId

//         const render = () => {
//             frameCount++ 
//             // this.draw(context, frameCount)
//             this.props.draw(context, frameCount)
//             animationFrameId = window.requestAnimationFrame(render)
//         }
//         render() 

//         return () => {
//             window.cancelAnimationFrame(animationFrameId)
//         }
//         // this.draw(context)
//         // context.fillStyle = '#000000'
//         // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
//     }
    
//     render() {
//         return (
//             <div>
//                 <canvas ref={this.canvasRef} {...this.props} />
//             </div>
//         )
//     }
// }


export default useCanvas;