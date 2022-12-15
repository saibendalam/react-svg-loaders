# svg-loader-react

Add smooth, fast loaders to your react code with ease

## Installation

To install the package, run the following command:
npm install svg-loader-react

## Usage

To use Loader in you project

```jsx
import Loader from svg-loader-react
function App(){
    return(
             <Loader name="Audio" />
        )
}
```

## output

![Audio](https://svgur.com/i/opn.svg)

## Available Loaders

|      Name      |               Usage               |                     output                     |
| :------------: | :-------------------------------: | :--------------------------------------------: |
|     Audio      |     `<Loader name="audio"/>`      |   ![Audio-svg](https://svgur.com/i/opn.svg)    |
| Ball Triangle  |  `<Loader name="balltriangle"/>`  | ![Ball-Triangle](https://svgur.com/i/or7.svg)  |
|      Bars      |      `<Loader name="bars"/>`      |      ![Bars](https://svgur.com/i/opV.svg)      |
|    Circles     |    `<Loader name="circles"/>`     |    ![Circles](https://svgur.com/i/oqW.svg)     |
|      Grid      |      `<Loader name="grid"/>`      |      ![grid](https://svgur.com/i/orM.svg)      |
|     hearts     |     `<Loader name="hearts"/>`     |     ![hearts](https://svgur.com/i/orY.svg)     |
|      oval      |      `<Loader name="oval"/>`      |      ![oval](https://svgur.com/i/orh.svg)      |
|      puff      |      `<Loader name="puff"/>`      |      ![puff](https://svgur.com/i/oqu.svg)      |
|     rings      |     `<Loader name="rings"/>`      |     ![rings](https://svgur.com/i/orN.svg)      |
| spinningcircle | `<Loader name="spinningcircle"/>` | ![spinningcircle](https://svgur.com/i/opo.svg) |
|    tailspin    |    `<Loader name="tailspin"/>`    |    ![tailspin](https://svgur.com/i/oqX.svg)    |
|   threedots    |   `<Loader name="threedots"/>`    |   ![threedots](https://svgur.com/i/oqv.svg)    |

## Options

You can pass the following options to the `Loader` function:
| Name | Type | default |
| :------------: | :-------------------------------: | :--------------------------------------------: |
| width | number | 45 |
| height | number | 45 |
| color | string | 🟨 |

## License

This project is licensed under the MIT License - see the [LICENSE](https://svgur.com/i/oqv.svg) file for details.
