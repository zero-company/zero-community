/**
 * References
 * https://spectrum.adobe.com/page/color-palette/
 * https://github.com/adobe/spectrum-tokens
 */

// https://github.com/adobe/spectrum-tokens/blob/main/src/color.json
const { black, white, ...colors } = {
  black: {
    value: 'rgb(0, 0, 0)',
  },
  white: {
    value: 'rgb(255, 255, 255)',
  },
  'gray-50': {
    sets: {
      light: {
        value: 'rgb(255, 255, 255)',
      },
      dark: {
        value: 'rgb(29, 29, 29)',
      },
      darkest: {
        value: 'rgb(0, 0, 0)',
      },
      wireframe: {
        value: 'rgb(255, 255, 255)',
      },
    },
  },
  'gray-75': {
    sets: {
      light: {
        value: 'rgb(253, 253, 253)',
      },
      dark: {
        value: 'rgb(38, 38, 38)',
      },
      darkest: {
        value: 'rgb(14, 14, 14)',
      },
      wireframe: {
        value: 'rgb(253, 253, 254)',
      },
    },
  },
  'gray-100': {
    sets: {
      light: {
        value: 'rgb(248, 248, 248)',
      },
      dark: {
        value: 'rgb(50, 50, 50)',
      },
      darkest: {
        value: 'rgb(29, 29, 29)',
      },
      wireframe: {
        value: 'rgb(244, 246, 252)',
      },
    },
  },
  'gray-200': {
    sets: {
      light: {
        value: 'rgb(230, 230, 230)',
      },
      dark: {
        value: 'rgb(63, 63, 63)',
      },
      darkest: {
        value: 'rgb(48, 48, 48)',
      },
      wireframe: {
        value: 'rgb(230, 236, 248)',
      },
    },
  },
  'gray-300': {
    sets: {
      light: {
        value: 'rgb(213, 213, 213)',
      },
      dark: {
        value: 'rgb(84, 84, 84)',
      },
      darkest: {
        value: 'rgb(75, 75, 75)',
      },
      wireframe: {
        value: 'rgb(210, 220, 243)',
      },
    },
  },
  'gray-400': {
    sets: {
      light: {
        value: 'rgb(177, 177, 177)',
      },
      dark: {
        value: 'rgb(112, 112, 112)',
      },
      darkest: {
        value: 'rgb(106, 106, 106)',
      },
      wireframe: {
        value: 'rgb(183, 200, 235)',
      },
    },
  },
  'gray-500': {
    sets: {
      light: {
        value: 'rgb(144, 144, 144)',
      },
      dark: {
        value: 'rgb(144, 144, 144)',
      },
      darkest: {
        value: 'rgb(141, 141, 141)',
      },
      wireframe: {
        value: 'rgb(152, 176, 226)',
      },
    },
  },
  'gray-600': {
    sets: {
      light: {
        value: 'rgb(109, 109, 109)',
      },
      dark: {
        value: 'rgb(178, 178, 178)',
      },
      darkest: {
        value: 'rgb(176, 176, 176)',
      },
      wireframe: {
        value: 'rgb(113, 144, 210)',
      },
    },
  },
  'gray-700': {
    sets: {
      light: {
        value: 'rgb(70, 70, 70)',
      },
      dark: {
        value: 'rgb(209, 209, 209)',
      },
      darkest: {
        value: 'rgb(208, 208, 208)',
      },
      wireframe: {
        value: 'rgb(78, 112, 187)',
      },
    },
  },
  'gray-800': {
    sets: {
      light: {
        value: 'rgb(34, 34, 34)',
      },
      dark: {
        value: 'rgb(235, 235, 235)',
      },
      darkest: {
        value: 'rgb(235, 235, 235)',
      },
      wireframe: {
        value: 'rgb(73, 110, 194)',
      },
    },
  },
  'gray-900': {
    sets: {
      light: {
        value: 'rgb(0, 0, 0)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(255, 255, 255)',
      },
      wireframe: {
        value: 'rgb(72, 110, 194)',
      },
    },
  },

  'red-100': {
    sets: {
      light: {
        value: 'rgb(255, 235, 231)',
      },
      dark: {
        value: 'rgb(123, 0, 0)',
      },
      darkest: {
        value: 'rgb(87, 0, 0)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'red-200': {
    sets: {
      light: {
        value: 'rgb(255, 221, 214)',
      },
      dark: {
        value: 'rgb(141, 0, 0)',
      },
      darkest: {
        value: 'rgb(110, 0, 0)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'red-300': {
    sets: {
      light: {
        value: 'rgb(255, 205, 195)',
      },
      dark: {
        value: 'rgb(165, 0, 0)',
      },
      darkest: {
        value: 'rgb(138, 0, 0)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'red-400': {
    sets: {
      light: {
        value: 'rgb(255, 183, 169)',
      },
      dark: {
        value: 'rgb(190, 4, 3)',
      },
      darkest: {
        value: 'rgb(167, 0, 0)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'red-500': {
    sets: {
      light: {
        value: 'rgb(255, 155, 136)',
      },
      dark: {
        value: 'rgb(215, 25, 19)',
      },
      darkest: {
        value: 'rgb(196, 7, 6)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'red-600': {
    sets: {
      light: {
        value: 'rgb(255, 124, 101)',
      },
      dark: {
        value: 'rgb(234, 56, 41)',
      },
      darkest: {
        value: 'rgb(221, 33, 24)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'red-700': {
    sets: {
      light: {
        value: 'rgb(247, 92, 70)',
      },
      dark: {
        value: 'rgb(246, 88, 67)',
      },
      darkest: {
        value: 'rgb(238, 67, 49)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'red-800': {
    sets: {
      light: {
        value: 'rgb(234, 56, 41)',
      },
      dark: {
        value: 'rgb(255, 117, 94)',
      },
      darkest: {
        value: 'rgb(249, 99, 76)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'red-900': {
    sets: {
      light: {
        value: 'rgb(211, 21, 16)',
      },
      dark: {
        value: 'rgb(255, 149, 129)',
      },
      darkest: {
        value: 'rgb(255, 129, 107)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'red-1000': {
    sets: {
      light: {
        value: 'rgb(180, 0, 0)',
      },
      dark: {
        value: 'rgb(255, 176, 161)',
      },
      darkest: {
        value: 'rgb(255, 158, 140)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'red-1100': {
    sets: {
      light: {
        value: 'rgb(147, 0, 0)',
      },
      dark: {
        value: 'rgb(255, 201, 189)',
      },
      darkest: {
        value: 'rgb(255, 183, 169)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'red-1200': {
    sets: {
      light: {
        value: 'rgb(116, 0, 0)',
      },
      dark: {
        value: 'rgb(255, 222, 216)',
      },
      darkest: {
        value: 'rgb(255, 205, 195)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'red-1300': {
    sets: {
      light: {
        value: 'rgb(89, 0, 0)',
      },
      dark: {
        value: 'rgb(255, 241, 238)',
      },
      darkest: {
        value: 'rgb(255, 223, 217)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'red-1400': {
    sets: {
      light: {
        value: 'rgb(67, 0, 0)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(255, 237, 234)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'orange-100': {
    sets: {
      light: {
        value: 'rgb(255, 236, 204)',
      },
      dark: {
        value: 'rgb(102, 37, 0)',
      },
      darkest: {
        value: 'rgb(72, 24, 1)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'orange-200': {
    sets: {
      light: {
        value: 'rgb(255, 223, 173)',
      },
      dark: {
        value: 'rgb(117, 45, 0)',
      },
      darkest: {
        value: 'rgb(92, 32, 0)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'orange-300': {
    sets: {
      light: {
        value: 'rgb(253, 210, 145)',
      },
      dark: {
        value: 'rgb(137, 55, 0)',
      },
      darkest: {
        value: 'rgb(115, 43, 0)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'orange-400': {
    sets: {
      light: {
        value: 'rgb(255, 187, 99)',
      },
      dark: {
        value: 'rgb(158, 66, 0)',
      },
      darkest: {
        value: 'rgb(138, 55, 0)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'orange-500': {
    sets: {
      light: {
        value: 'rgb(255, 160, 55)',
      },
      dark: {
        value: 'rgb(180, 78, 0)',
      },
      darkest: {
        value: 'rgb(162, 68, 0)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'orange-600': {
    sets: {
      light: {
        value: 'rgb(246, 133, 17)',
      },
      dark: {
        value: 'rgb(202, 93, 0)',
      },
      darkest: {
        value: 'rgb(186, 82, 0)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'orange-700': {
    sets: {
      light: {
        value: 'rgb(228, 111, 0)',
      },
      dark: {
        value: 'rgb(225, 109, 0)',
      },
      darkest: {
        value: 'rgb(210, 98, 0)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'orange-800': {
    sets: {
      light: {
        value: 'rgb(203, 93, 0)',
      },
      dark: {
        value: 'rgb(244, 129, 12)',
      },
      darkest: {
        value: 'rgb(232, 116, 0)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'orange-900': {
    sets: {
      light: {
        value: 'rgb(177, 76, 0)',
      },
      dark: {
        value: 'rgb(254, 154, 46)',
      },
      darkest: {
        value: 'rgb(249, 137, 23)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'orange-1000': {
    sets: {
      light: {
        value: 'rgb(149, 61, 0)',
      },
      dark: {
        value: 'rgb(255, 181, 88)',
      },
      darkest: {
        value: 'rgb(255, 162, 59)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'orange-1100': {
    sets: {
      light: {
        value: 'rgb(122, 47, 0)',
      },
      dark: {
        value: 'rgb(253, 206, 136)',
      },
      darkest: {
        value: 'rgb(255, 188, 102)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'orange-1200': {
    sets: {
      light: {
        value: 'rgb(97, 35, 0)',
      },
      dark: {
        value: 'rgb(255, 225, 179)',
      },
      darkest: {
        value: 'rgb(253, 210, 145)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'orange-1300': {
    sets: {
      light: {
        value: 'rgb(73, 25, 1)',
      },
      dark: {
        value: 'rgb(255, 242, 221)',
      },
      darkest: {
        value: 'rgb(255, 226, 181)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'orange-1400': {
    sets: {
      light: {
        value: 'rgb(53, 18, 1)',
      },
      dark: {
        value: 'rgb(255, 253, 249)',
      },
      darkest: {
        value: 'rgb(255, 239, 213)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'yellow-100': {
    sets: {
      light: {
        value: 'rgb(251, 241, 152)',
      },
      dark: {
        value: 'rgb(76, 54, 0)',
      },
      darkest: {
        value: 'rgb(53, 36, 0)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'yellow-200': {
    sets: {
      light: {
        value: 'rgb(248, 231, 80)',
      },
      dark: {
        value: 'rgb(88, 64, 0)',
      },
      darkest: {
        value: 'rgb(68, 47, 0)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'yellow-300': {
    sets: {
      light: {
        value: 'rgb(248, 217, 4)',
      },
      dark: {
        value: 'rgb(103, 76, 0)',
      },
      darkest: {
        value: 'rgb(86, 62, 0)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'yellow-400': {
    sets: {
      light: {
        value: 'rgb(232, 198, 0)',
      },
      dark: {
        value: 'rgb(119, 89, 0)',
      },
      darkest: {
        value: 'rgb(103, 77, 0)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'yellow-500': {
    sets: {
      light: {
        value: 'rgb(215, 179, 0)',
      },
      dark: {
        value: 'rgb(136, 104, 0)',
      },
      darkest: {
        value: 'rgb(122, 92, 0)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'yellow-600': {
    sets: {
      light: {
        value: 'rgb(196, 159, 0)',
      },
      dark: {
        value: 'rgb(155, 120, 0)',
      },
      darkest: {
        value: 'rgb(141, 108, 0)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'yellow-700': {
    sets: {
      light: {
        value: 'rgb(176, 140, 0)',
      },
      dark: {
        value: 'rgb(174, 137, 0)',
      },
      darkest: {
        value: 'rgb(161, 126, 0)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'yellow-800': {
    sets: {
      light: {
        value: 'rgb(155, 120, 0)',
      },
      dark: {
        value: 'rgb(192, 156, 0)',
      },
      darkest: {
        value: 'rgb(180, 144, 0)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'yellow-900': {
    sets: {
      light: {
        value: 'rgb(133, 102, 0)',
      },
      dark: {
        value: 'rgb(211, 174, 0)',
      },
      darkest: {
        value: 'rgb(199, 162, 0)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'yellow-1000': {
    sets: {
      light: {
        value: 'rgb(112, 83, 0)',
      },
      dark: {
        value: 'rgb(228, 194, 0)',
      },
      darkest: {
        value: 'rgb(216, 181, 0)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'yellow-1100': {
    sets: {
      light: {
        value: 'rgb(91, 67, 0)',
      },
      dark: {
        value: 'rgb(244, 213, 0)',
      },
      darkest: {
        value: 'rgb(233, 199, 0)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'yellow-1200': {
    sets: {
      light: {
        value: 'rgb(72, 51, 0)',
      },
      dark: {
        value: 'rgb(249, 232, 92)',
      },
      darkest: {
        value: 'rgb(247, 216, 4)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'yellow-1300': {
    sets: {
      light: {
        value: 'rgb(54, 37, 0)',
      },
      dark: {
        value: 'rgb(252, 246, 187)',
      },
      darkest: {
        value: 'rgb(249, 233, 97)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'yellow-1400': {
    sets: {
      light: {
        value: 'rgb(40, 26, 0)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(252, 243, 170)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'chartreuse-100': {
    sets: {
      light: {
        value: 'rgb(219, 252, 110)',
      },
      dark: {
        value: 'rgb(48, 64, 0)',
      },
      darkest: {
        value: 'rgb(32, 43, 0)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'chartreuse-200': {
    sets: {
      light: {
        value: 'rgb(203, 244, 67)',
      },
      dark: {
        value: 'rgb(55, 74, 0)',
      },
      darkest: {
        value: 'rgb(42, 56, 0)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'chartreuse-300': {
    sets: {
      light: {
        value: 'rgb(188, 233, 42)',
      },
      dark: {
        value: 'rgb(65, 87, 0)',
      },
      darkest: {
        value: 'rgb(54, 72, 0)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'chartreuse-400': {
    sets: {
      light: {
        value: 'rgb(170, 216, 22)',
      },
      dark: {
        value: 'rgb(76, 102, 0)',
      },
      darkest: {
        value: 'rgb(66, 88, 0)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'chartreuse-500': {
    sets: {
      light: {
        value: 'rgb(152, 197, 10)',
      },
      dark: {
        value: 'rgb(89, 118, 0)',
      },
      darkest: {
        value: 'rgb(79, 105, 0)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'chartreuse-600': {
    sets: {
      light: {
        value: 'rgb(135, 177, 3)',
      },
      dark: {
        value: 'rgb(102, 136, 0)',
      },
      darkest: {
        value: 'rgb(93, 123, 0)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'chartreuse-700': {
    sets: {
      light: {
        value: 'rgb(118, 156, 0)',
      },
      dark: {
        value: 'rgb(117, 154, 0)',
      },
      darkest: {
        value: 'rgb(107, 142, 0)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'chartreuse-800': {
    sets: {
      light: {
        value: 'rgb(103, 136, 0)',
      },
      dark: {
        value: 'rgb(132, 173, 1)',
      },
      darkest: {
        value: 'rgb(122, 161, 0)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'chartreuse-900': {
    sets: {
      light: {
        value: 'rgb(87, 116, 0)',
      },
      dark: {
        value: 'rgb(148, 192, 8)',
      },
      darkest: {
        value: 'rgb(138, 180, 3)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'chartreuse-1000': {
    sets: {
      light: {
        value: 'rgb(72, 96, 0)',
      },
      dark: {
        value: 'rgb(166, 211, 18)',
      },
      darkest: {
        value: 'rgb(154, 198, 11)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'chartreuse-1100': {
    sets: {
      light: {
        value: 'rgb(58, 77, 0)',
      },
      dark: {
        value: 'rgb(184, 229, 37)',
      },
      darkest: {
        value: 'rgb(170, 216, 22)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'chartreuse-1200': {
    sets: {
      light: {
        value: 'rgb(44, 59, 0)',
      },
      dark: {
        value: 'rgb(205, 245, 71)',
      },
      darkest: {
        value: 'rgb(187, 232, 41)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'chartreuse-1300': {
    sets: {
      light: {
        value: 'rgb(33, 44, 0)',
      },
      dark: {
        value: 'rgb(231, 254, 154)',
      },
      darkest: {
        value: 'rgb(205, 246, 72)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'chartreuse-1400': {
    sets: {
      light: {
        value: 'rgb(24, 31, 0)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(225, 253, 132)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'celery-100': {
    sets: {
      light: {
        value: 'rgb(205, 252, 191)',
      },
      dark: {
        value: 'rgb(0, 69, 10)',
      },
      darkest: {
        value: 'rgb(0, 47, 7)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'celery-200': {
    sets: {
      light: {
        value: 'rgb(174, 246, 157)',
      },
      dark: {
        value: 'rgb(0, 80, 12)',
      },
      darkest: {
        value: 'rgb(0, 61, 9)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'celery-300': {
    sets: {
      light: {
        value: 'rgb(150, 238, 133)',
      },
      dark: {
        value: 'rgb(0, 94, 14)',
      },
      darkest: {
        value: 'rgb(0, 77, 12)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'celery-400': {
    sets: {
      light: {
        value: 'rgb(114, 224, 106)',
      },
      dark: {
        value: 'rgb(0, 109, 15)',
      },
      darkest: {
        value: 'rgb(0, 95, 15)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'celery-500': {
    sets: {
      light: {
        value: 'rgb(78, 207, 80)',
      },
      dark: {
        value: 'rgb(0, 127, 15)',
      },
      darkest: {
        value: 'rgb(0, 113, 15)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'celery-600': {
    sets: {
      light: {
        value: 'rgb(39, 187, 54)',
      },
      dark: {
        value: 'rgb(0, 145, 18)',
      },
      darkest: {
        value: 'rgb(0, 132, 15)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'celery-700': {
    sets: {
      light: {
        value: 'rgb(7, 167, 33)',
      },
      dark: {
        value: 'rgb(4, 165, 30)',
      },
      darkest: {
        value: 'rgb(0, 151, 20)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'celery-800': {
    sets: {
      light: {
        value: 'rgb(0, 145, 18)',
      },
      dark: {
        value: 'rgb(34, 184, 51)',
      },
      darkest: {
        value: 'rgb(13, 171, 37)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'celery-900': {
    sets: {
      light: {
        value: 'rgb(0, 124, 15)',
      },
      dark: {
        value: 'rgb(68, 202, 73)',
      },
      darkest: {
        value: 'rgb(45, 191, 58)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'celery-1000': {
    sets: {
      light: {
        value: 'rgb(0, 103, 15)',
      },
      dark: {
        value: 'rgb(105, 220, 99)',
      },
      darkest: {
        value: 'rgb(80, 208, 82)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'celery-1100': {
    sets: {
      light: {
        value: 'rgb(0, 83, 13)',
      },
      dark: {
        value: 'rgb(142, 235, 127)',
      },
      darkest: {
        value: 'rgb(115, 224, 107)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'celery-1200': {
    sets: {
      light: {
        value: 'rgb(0, 64, 10)',
      },
      dark: {
        value: 'rgb(180, 247, 162)',
      },
      darkest: {
        value: 'rgb(147, 237, 131)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'celery-1300': {
    sets: {
      light: {
        value: 'rgb(0, 48, 7)',
      },
      dark: {
        value: 'rgb(221, 253, 211)',
      },
      darkest: {
        value: 'rgb(180, 247, 162)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'celery-1400': {
    sets: {
      light: {
        value: 'rgb(0, 34, 5)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(213, 252, 202)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'green-100': {
    sets: {
      light: {
        value: 'rgb(206, 248, 224)',
      },
      dark: {
        value: 'rgb(4, 67, 41)',
      },
      darkest: {
        value: 'rgb(10, 44, 28)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'green-200': {
    sets: {
      light: {
        value: 'rgb(173, 244, 206)',
      },
      dark: {
        value: 'rgb(0, 78, 47)',
      },
      darkest: {
        value: 'rgb(7, 59, 36)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'green-300': {
    sets: {
      light: {
        value: 'rgb(137, 236, 188)',
      },
      dark: {
        value: 'rgb(0, 92, 56)',
      },
      darkest: {
        value: 'rgb(0, 76, 46)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'green-400': {
    sets: {
      light: {
        value: 'rgb(103, 222, 168)',
      },
      dark: {
        value: 'rgb(0, 108, 67)',
      },
      darkest: {
        value: 'rgb(0, 93, 57)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'green-500': {
    sets: {
      light: {
        value: 'rgb(73, 204, 147)',
      },
      dark: {
        value: 'rgb(0, 125, 78)',
      },
      darkest: {
        value: 'rgb(0, 111, 69)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'green-600': {
    sets: {
      light: {
        value: 'rgb(47, 184, 128)',
      },
      dark: {
        value: 'rgb(0, 143, 93)',
      },
      darkest: {
        value: 'rgb(0, 130, 82)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'green-700': {
    sets: {
      light: {
        value: 'rgb(21, 164, 110)',
      },
      dark: {
        value: 'rgb(18, 162, 108)',
      },
      darkest: {
        value: 'rgb(0, 149, 98)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'green-800': {
    sets: {
      light: {
        value: 'rgb(0, 143, 93)',
      },
      dark: {
        value: 'rgb(43, 180, 125)',
      },
      darkest: {
        value: 'rgb(28, 168, 114)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'green-900': {
    sets: {
      light: {
        value: 'rgb(0, 122, 77)',
      },
      dark: {
        value: 'rgb(67, 199, 143)',
      },
      darkest: {
        value: 'rgb(52, 187, 132)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'green-1000': {
    sets: {
      light: {
        value: 'rgb(0, 101, 62)',
      },
      dark: {
        value: 'rgb(94, 217, 162)',
      },
      darkest: {
        value: 'rgb(75, 205, 149)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'green-1100': {
    sets: {
      light: {
        value: 'rgb(0, 81, 50)',
      },
      dark: {
        value: 'rgb(129, 233, 184)',
      },
      darkest: {
        value: 'rgb(103, 222, 168)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'green-1200': {
    sets: {
      light: {
        value: 'rgb(5, 63, 39)',
      },
      dark: {
        value: 'rgb(177, 244, 209)',
      },
      darkest: {
        value: 'rgb(137, 236, 188)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'green-1300': {
    sets: {
      light: {
        value: 'rgb(10, 46, 29)',
      },
      dark: {
        value: 'rgb(223, 250, 234)',
      },
      darkest: {
        value: 'rgb(177, 244, 209)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'green-1400': {
    sets: {
      light: {
        value: 'rgb(10, 32, 21)',
      },
      dark: {
        value: 'rgb(254, 255, 252)',
      },
      darkest: {
        value: 'rgb(214, 249, 228)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'seafoam-100': {
    sets: {
      light: {
        value: 'rgb(206, 247, 243)',
      },
      dark: {
        value: 'rgb(18, 65, 63)',
      },
      darkest: {
        value: 'rgb(18, 43, 42)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'seafoam-200': {
    sets: {
      light: {
        value: 'rgb(170, 241, 234)',
      },
      dark: {
        value: 'rgb(14, 76, 73)',
      },
      darkest: {
        value: 'rgb(19, 57, 55)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'seafoam-300': {
    sets: {
      light: {
        value: 'rgb(140, 233, 226)',
      },
      dark: {
        value: 'rgb(4, 90, 87)',
      },
      darkest: {
        value: 'rgb(16, 73, 70)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'seafoam-400': {
    sets: {
      light: {
        value: 'rgb(101, 218, 210)',
      },
      dark: {
        value: 'rgb(0, 105, 101)',
      },
      darkest: {
        value: 'rgb(3, 91, 88)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'seafoam-500': {
    sets: {
      light: {
        value: 'rgb(63, 201, 193)',
      },
      dark: {
        value: 'rgb(0, 122, 117)',
      },
      darkest: {
        value: 'rgb(0, 108, 104)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'seafoam-600': {
    sets: {
      light: {
        value: 'rgb(15, 181, 174)',
      },
      dark: {
        value: 'rgb(0, 140, 135)',
      },
      darkest: {
        value: 'rgb(0, 127, 121)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'seafoam-700': {
    sets: {
      light: {
        value: 'rgb(0, 161, 154)',
      },
      dark: {
        value: 'rgb(0, 158, 152)',
      },
      darkest: {
        value: 'rgb(0, 146, 140)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'seafoam-800': {
    sets: {
      light: {
        value: 'rgb(0, 140, 135)',
      },
      dark: {
        value: 'rgb(3, 178, 171)',
      },
      darkest: {
        value: 'rgb(0, 165, 159)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'seafoam-900': {
    sets: {
      light: {
        value: 'rgb(0, 119, 114)',
      },
      dark: {
        value: 'rgb(54, 197, 189)',
      },
      darkest: {
        value: 'rgb(26, 185, 178)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'seafoam-1000': {
    sets: {
      light: {
        value: 'rgb(0, 99, 95)',
      },
      dark: {
        value: 'rgb(93, 214, 207)',
      },
      darkest: {
        value: 'rgb(66, 202, 195)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'seafoam-1100': {
    sets: {
      light: {
        value: 'rgb(12, 79, 76)',
      },
      dark: {
        value: 'rgb(132, 230, 223)',
      },
      darkest: {
        value: 'rgb(102, 218, 211)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'seafoam-1200': {
    sets: {
      light: {
        value: 'rgb(18, 60, 58)',
      },
      dark: {
        value: 'rgb(176, 242, 236)',
      },
      darkest: {
        value: 'rgb(139, 232, 225)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'seafoam-1300': {
    sets: {
      light: {
        value: 'rgb(18, 44, 43)',
      },
      dark: {
        value: 'rgb(223, 249, 246)',
      },
      darkest: {
        value: 'rgb(179, 242, 237)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'seafoam-1400': {
    sets: {
      light: {
        value: 'rgb(15, 31, 30)',
      },
      dark: {
        value: 'rgb(254, 255, 254)',
      },
      darkest: {
        value: 'rgb(215, 248, 244)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'cyan-100': {
    sets: {
      light: {
        value: 'rgb(197, 248, 255)',
      },
      dark: {
        value: 'rgb(0, 61, 98)',
      },
      darkest: {
        value: 'rgb(0, 41, 68)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'cyan-200': {
    sets: {
      light: {
        value: 'rgb(164, 240, 255)',
      },
      dark: {
        value: 'rgb(0, 71, 111)',
      },
      darkest: {
        value: 'rgb(0, 54, 88)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'cyan-300': {
    sets: {
      light: {
        value: 'rgb(136, 231, 250)',
      },
      dark: {
        value: 'rgb(0, 85, 127)',
      },
      darkest: {
        value: 'rgb(0, 69, 108)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'cyan-400': {
    sets: {
      light: {
        value: 'rgb(96, 216, 243)',
      },
      dark: {
        value: 'rgb(0, 100, 145)',
      },
      darkest: {
        value: 'rgb(0, 86, 128)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'cyan-500': {
    sets: {
      light: {
        value: 'rgb(51, 197, 232)',
      },
      dark: {
        value: 'rgb(0, 116, 162)',
      },
      darkest: {
        value: 'rgb(0, 103, 147)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'cyan-600': {
    sets: {
      light: {
        value: 'rgb(18, 176, 218)',
      },
      dark: {
        value: 'rgb(0, 134, 180)',
      },
      darkest: {
        value: 'rgb(0, 121, 167)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'cyan-700': {
    sets: {
      light: {
        value: 'rgb(1, 156, 200)',
      },
      dark: {
        value: 'rgb(0, 153, 198)',
      },
      darkest: {
        value: 'rgb(0, 140, 186)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'cyan-800': {
    sets: {
      light: {
        value: 'rgb(0, 134, 180)',
      },
      dark: {
        value: 'rgb(14, 173, 215)',
      },
      darkest: {
        value: 'rgb(4, 160, 205)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'cyan-900': {
    sets: {
      light: {
        value: 'rgb(0, 113, 159)',
      },
      dark: {
        value: 'rgb(44, 193, 230)',
      },
      darkest: {
        value: 'rgb(23, 180, 221)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'cyan-1000': {
    sets: {
      light: {
        value: 'rgb(0, 93, 137)',
      },
      dark: {
        value: 'rgb(84, 211, 241)',
      },
      darkest: {
        value: 'rgb(57, 199, 234)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'cyan-1100': {
    sets: {
      light: {
        value: 'rgb(0, 74, 115)',
      },
      dark: {
        value: 'rgb(127, 228, 249)',
      },
      darkest: {
        value: 'rgb(96, 216, 243)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'cyan-1200': {
    sets: {
      light: {
        value: 'rgb(0, 57, 93)',
      },
      dark: {
        value: 'rgb(167, 241, 255)',
      },
      darkest: {
        value: 'rgb(134, 230, 250)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'cyan-1300': {
    sets: {
      light: {
        value: 'rgb(0, 42, 70)',
      },
      dark: {
        value: 'rgb(215, 250, 255)',
      },
      darkest: {
        value: 'rgb(170, 242, 255)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'cyan-1400': {
    sets: {
      light: {
        value: 'rgb(0, 30, 51)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(206, 249, 255)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'blue-100': {
    sets: {
      light: {
        value: 'rgb(224, 242, 255)',
      },
      dark: {
        value: 'rgb(0, 56, 119)',
      },
      darkest: {
        value: 'rgb(0, 38, 81)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'blue-200': {
    sets: {
      light: {
        value: 'rgb(202, 232, 255)',
      },
      dark: {
        value: 'rgb(0, 65, 138)',
      },
      darkest: {
        value: 'rgb(0, 50, 106)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'blue-300': {
    sets: {
      light: {
        value: 'rgb(181, 222, 255)',
      },
      dark: {
        value: 'rgb(0, 77, 163)',
      },
      darkest: {
        value: 'rgb(0, 64, 135)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'blue-400': {
    sets: {
      light: {
        value: 'rgb(150, 206, 253)',
      },
      dark: {
        value: 'rgb(0, 89, 194)',
      },
      darkest: {
        value: 'rgb(0, 78, 166)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'blue-500': {
    sets: {
      light: {
        value: 'rgb(120, 187, 250)',
      },
      dark: {
        value: 'rgb(3, 103, 224)',
      },
      darkest: {
        value: 'rgb(0, 92, 200)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'blue-600': {
    sets: {
      light: {
        value: 'rgb(89, 167, 246)',
      },
      dark: {
        value: 'rgb(19, 121, 243)',
      },
      darkest: {
        value: 'rgb(6, 108, 231)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'blue-700': {
    sets: {
      light: {
        value: 'rgb(56, 146, 243)',
      },
      dark: {
        value: 'rgb(52, 143, 244)',
      },
      darkest: {
        value: 'rgb(29, 128, 245)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'blue-800': {
    sets: {
      light: {
        value: 'rgb(20, 122, 243)',
      },
      dark: {
        value: 'rgb(84, 163, 246)',
      },
      darkest: {
        value: 'rgb(64, 150, 243)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'blue-900': {
    sets: {
      light: {
        value: 'rgb(2, 101, 220)',
      },
      dark: {
        value: 'rgb(114, 183, 249)',
      },
      darkest: {
        value: 'rgb(94, 170, 247)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'blue-1000': {
    sets: {
      light: {
        value: 'rgb(0, 84, 182)',
      },
      dark: {
        value: 'rgb(143, 202, 252)',
      },
      darkest: {
        value: 'rgb(124, 189, 250)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'blue-1100': {
    sets: {
      light: {
        value: 'rgb(0, 68, 145)',
      },
      dark: {
        value: 'rgb(174, 219, 254)',
      },
      darkest: {
        value: 'rgb(152, 206, 253)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'blue-1200': {
    sets: {
      light: {
        value: 'rgb(0, 53, 113)',
      },
      dark: {
        value: 'rgb(204, 233, 255)',
      },
      darkest: {
        value: 'rgb(179, 222, 254)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'blue-1300': {
    sets: {
      light: {
        value: 'rgb(0, 39, 84)',
      },
      dark: {
        value: 'rgb(232, 246, 255)',
      },
      darkest: {
        value: 'rgb(206, 234, 255)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'blue-1400': {
    sets: {
      light: {
        value: 'rgb(0, 28, 60)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(227, 243, 255)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'indigo-100': {
    sets: {
      light: {
        value: 'rgb(237, 238, 255)',
      },
      dark: {
        value: 'rgb(40, 44, 140)',
      },
      darkest: {
        value: 'rgb(26, 29, 97)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'indigo-200': {
    sets: {
      light: {
        value: 'rgb(224, 226, 255)',
      },
      dark: {
        value: 'rgb(47, 52, 163)',
      },
      darkest: {
        value: 'rgb(35, 39, 125)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'indigo-300': {
    sets: {
      light: {
        value: 'rgb(211, 213, 255)',
      },
      dark: {
        value: 'rgb(57, 63, 187)',
      },
      darkest: {
        value: 'rgb(46, 50, 158)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'indigo-400': {
    sets: {
      light: {
        value: 'rgb(193, 196, 255)',
      },
      dark: {
        value: 'rgb(70, 75, 211)',
      },
      darkest: {
        value: 'rgb(58, 63, 189)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'indigo-500': {
    sets: {
      light: {
        value: 'rgb(172, 175, 255)',
      },
      dark: {
        value: 'rgb(85, 91, 231)',
      },
      darkest: {
        value: 'rgb(73, 78, 216)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'indigo-600': {
    sets: {
      light: {
        value: 'rgb(149, 153, 255)',
      },
      dark: {
        value: 'rgb(104, 109, 244)',
      },
      darkest: {
        value: 'rgb(90, 96, 235)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'indigo-700': {
    sets: {
      light: {
        value: 'rgb(126, 132, 252)',
      },
      dark: {
        value: 'rgb(124, 129, 251)',
      },
      darkest: {
        value: 'rgb(110, 115, 246)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'indigo-800': {
    sets: {
      light: {
        value: 'rgb(104, 109, 244)',
      },
      dark: {
        value: 'rgb(145, 149, 255)',
      },
      darkest: {
        value: 'rgb(132, 136, 253)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'indigo-900': {
    sets: {
      light: {
        value: 'rgb(82, 88, 228)',
      },
      dark: {
        value: 'rgb(167, 170, 255)',
      },
      darkest: {
        value: 'rgb(153, 157, 255)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'indigo-1000': {
    sets: {
      light: {
        value: 'rgb(64, 70, 202)',
      },
      dark: {
        value: 'rgb(188, 190, 255)',
      },
      darkest: {
        value: 'rgb(174, 177, 255)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'indigo-1100': {
    sets: {
      light: {
        value: 'rgb(50, 54, 168)',
      },
      dark: {
        value: 'rgb(208, 210, 255)',
      },
      darkest: {
        value: 'rgb(194, 196, 255)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'indigo-1200': {
    sets: {
      light: {
        value: 'rgb(38, 41, 134)',
      },
      dark: {
        value: 'rgb(226, 228, 255)',
      },
      darkest: {
        value: 'rgb(212, 213, 255)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'indigo-1300': {
    sets: {
      light: {
        value: 'rgb(27, 30, 100)',
      },
      dark: {
        value: 'rgb(243, 243, 254)',
      },
      darkest: {
        value: 'rgb(227, 228, 255)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'indigo-1400': {
    sets: {
      light: {
        value: 'rgb(20, 22, 72)',
      },
      dark: {
        value: 'rgb(255, 255, 255)',
      },
      darkest: {
        value: 'rgb(240, 240, 255)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'purple-100': {
    sets: {
      light: {
        value: 'rgb(246, 235, 255)',
      },
      dark: {
        value: 'rgb(76, 13, 157)',
      },
      darkest: {
        value: 'rgb(50, 16, 104)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'purple-200': {
    sets: {
      light: {
        value: 'rgb(238, 221, 255)',
      },
      dark: {
        value: 'rgb(89, 17, 177)',
      },
      darkest: {
        value: 'rgb(67, 13, 140)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'purple-300': {
    sets: {
      light: {
        value: 'rgb(230, 208, 255)',
      },
      dark: {
        value: 'rgb(105, 28, 200)',
      },
      darkest: {
        value: 'rgb(86, 16, 173)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'purple-400': {
    sets: {
      light: {
        value: 'rgb(219, 187, 254)',
      },
      dark: {
        value: 'rgb(122, 45, 218)',
      },
      darkest: {
        value: 'rgb(106, 29, 200)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'purple-500': {
    sets: {
      light: {
        value: 'rgb(204, 164, 253)',
      },
      dark: {
        value: 'rgb(140, 65, 233)',
      },
      darkest: {
        value: 'rgb(126, 49, 222)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'purple-600': {
    sets: {
      light: {
        value: 'rgb(189, 139, 252)',
      },
      dark: {
        value: 'rgb(157, 87, 243)',
      },
      darkest: {
        value: 'rgb(145, 70, 236)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'purple-700': {
    sets: {
      light: {
        value: 'rgb(174, 114, 249)',
      },
      dark: {
        value: 'rgb(172, 111, 249)',
      },
      darkest: {
        value: 'rgb(162, 94, 246)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'purple-800': {
    sets: {
      light: {
        value: 'rgb(157, 87, 244)',
      },
      dark: {
        value: 'rgb(187, 135, 251)',
      },
      darkest: {
        value: 'rgb(178, 119, 250)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'purple-900': {
    sets: {
      light: {
        value: 'rgb(137, 61, 231)',
      },
      dark: {
        value: 'rgb(202, 159, 252)',
      },
      darkest: {
        value: 'rgb(192, 143, 252)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'purple-1000': {
    sets: {
      light: {
        value: 'rgb(115, 38, 211)',
      },
      dark: {
        value: 'rgb(215, 182, 254)',
      },
      darkest: {
        value: 'rgb(206, 166, 253)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'purple-1100': {
    sets: {
      light: {
        value: 'rgb(93, 19, 183)',
      },
      dark: {
        value: 'rgb(228, 204, 254)',
      },
      darkest: {
        value: 'rgb(219, 188, 254)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'purple-1200': {
    sets: {
      light: {
        value: 'rgb(71, 12, 148)',
      },
      dark: {
        value: 'rgb(239, 223, 255)',
      },
      darkest: {
        value: 'rgb(230, 207, 255)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'purple-1300': {
    sets: {
      light: {
        value: 'rgb(51, 16, 106)',
      },
      dark: {
        value: 'rgb(249, 240, 255)',
      },
      darkest: {
        value: 'rgb(240, 224, 255)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'purple-1400': {
    sets: {
      light: {
        value: 'rgb(35, 15, 73)',
      },
      dark: {
        value: 'rgb(255, 253, 255)',
      },
      darkest: {
        value: 'rgb(248, 237, 255)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'fuchsia-100': {
    sets: {
      light: {
        value: 'rgb(255, 233, 252)',
      },
      dark: {
        value: 'rgb(107, 3, 106)',
      },
      darkest: {
        value: 'rgb(70, 14, 68)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'fuchsia-200': {
    sets: {
      light: {
        value: 'rgb(255, 218, 250)',
      },
      dark: {
        value: 'rgb(123, 0, 123)',
      },
      darkest: {
        value: 'rgb(93, 9, 92)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'fuchsia-300': {
    sets: {
      light: {
        value: 'rgb(254, 199, 248)',
      },
      dark: {
        value: 'rgb(144, 0, 145)',
      },
      darkest: {
        value: 'rgb(120, 0, 120)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'fuchsia-400': {
    sets: {
      light: {
        value: 'rgb(251, 174, 246)',
      },
      dark: {
        value: 'rgb(165, 13, 166)',
      },
      darkest: {
        value: 'rgb(146, 0, 147)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'fuchsia-500': {
    sets: {
      light: {
        value: 'rgb(245, 146, 243)',
      },
      dark: {
        value: 'rgb(185, 37, 185)',
      },
      darkest: {
        value: 'rgb(169, 19, 170)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'fuchsia-600': {
    sets: {
      light: {
        value: 'rgb(237, 116, 237)',
      },
      dark: {
        value: 'rgb(205, 57, 206)',
      },
      darkest: {
        value: 'rgb(191, 43, 191)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'fuchsia-700': {
    sets: {
      light: {
        value: 'rgb(224, 85, 226)',
      },
      dark: {
        value: 'rgb(223, 81, 224)',
      },
      darkest: {
        value: 'rgb(211, 65, 213)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'fuchsia-800': {
    sets: {
      light: {
        value: 'rgb(205, 58, 206)',
      },
      dark: {
        value: 'rgb(235, 110, 236)',
      },
      darkest: {
        value: 'rgb(228, 91, 229)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'fuchsia-900': {
    sets: {
      light: {
        value: 'rgb(182, 34, 183)',
      },
      dark: {
        value: 'rgb(244, 140, 242)',
      },
      darkest: {
        value: 'rgb(239, 120, 238)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'fuchsia-1000': {
    sets: {
      light: {
        value: 'rgb(157, 3, 158)',
      },
      dark: {
        value: 'rgb(250, 168, 245)',
      },
      darkest: {
        value: 'rgb(246, 149, 243)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'fuchsia-1100': {
    sets: {
      light: {
        value: 'rgb(128, 0, 129)',
      },
      dark: {
        value: 'rgb(254, 194, 248)',
      },
      darkest: {
        value: 'rgb(251, 175, 246)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'fuchsia-1200': {
    sets: {
      light: {
        value: 'rgb(100, 6, 100)',
      },
      dark: {
        value: 'rgb(255, 219, 250)',
      },
      darkest: {
        value: 'rgb(254, 199, 248)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'fuchsia-1300': {
    sets: {
      light: {
        value: 'rgb(71, 14, 70)',
      },
      dark: {
        value: 'rgb(255, 239, 252)',
      },
      darkest: {
        value: 'rgb(255, 220, 250)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'fuchsia-1400': {
    sets: {
      light: {
        value: 'rgb(50, 13, 49)',
      },
      dark: {
        value: 'rgb(255, 253, 255)',
      },
      darkest: {
        value: 'rgb(255, 235, 252)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },

  'magenta-100': {
    sets: {
      light: {
        value: 'rgb(255, 234, 241)',
      },
      dark: {
        value: 'rgb(118, 0, 58)',
      },
      darkest: {
        value: 'rgb(83, 3, 41)',
      },
      wireframe: {
        value: 'rgb(242, 245, 251)',
      },
    },
  },
  'magenta-200': {
    sets: {
      light: {
        value: 'rgb(255, 220, 232)',
      },
      dark: {
        value: 'rgb(137, 0, 66)',
      },
      darkest: {
        value: 'rgb(106, 0, 52)',
      },
      wireframe: {
        value: 'rgb(237, 241, 250)',
      },
    },
  },
  'magenta-300': {
    sets: {
      light: {
        value: 'rgb(255, 202, 221)',
      },
      dark: {
        value: 'rgb(160, 0, 77)',
      },
      darkest: {
        value: 'rgb(133, 0, 65)',
      },
      wireframe: {
        value: 'rgb(233, 238, 248)',
      },
    },
  },
  'magenta-400': {
    sets: {
      light: {
        value: 'rgb(255, 178, 206)',
      },
      dark: {
        value: 'rgb(182, 18, 90)',
      },
      darkest: {
        value: 'rgb(161, 0, 78)',
      },
      wireframe: {
        value: 'rgb(226, 232, 247)',
      },
    },
  },
  'magenta-500': {
    sets: {
      light: {
        value: 'rgb(255, 149, 189)',
      },
      dark: {
        value: 'rgb(203, 38, 109)',
      },
      darkest: {
        value: 'rgb(186, 22, 93)',
      },
      wireframe: {
        value: 'rgb(216, 225, 244)',
      },
    },
  },
  'magenta-600': {
    sets: {
      light: {
        value: 'rgb(250, 119, 170)',
      },
      dark: {
        value: 'rgb(222, 61, 130)',
      },
      darkest: {
        value: 'rgb(209, 43, 114)',
      },
      wireframe: {
        value: 'rgb(203, 215, 241)',
      },
    },
  },
  'magenta-700': {
    sets: {
      light: {
        value: 'rgb(239, 90, 152)',
      },
      dark: {
        value: 'rgb(237, 87, 149)',
      },
      darkest: {
        value: 'rgb(227, 69, 137)',
      },
      wireframe: {
        value: 'rgb(190, 205, 237)',
      },
    },
  },
  'magenta-800': {
    sets: {
      light: {
        value: 'rgb(222, 61, 130)',
      },
      dark: {
        value: 'rgb(249, 114, 167)',
      },
      darkest: {
        value: 'rgb(241, 97, 156)',
      },
      wireframe: {
        value: 'rgb(173, 192, 233)',
      },
    },
  },
  'magenta-900': {
    sets: {
      light: {
        value: 'rgb(200, 34, 105)',
      },
      dark: {
        value: 'rgb(255, 143, 185)',
      },
      darkest: {
        value: 'rgb(252, 124, 173)',
      },
      wireframe: {
        value: 'rgb(154, 177, 227)',
      },
    },
  },
  'magenta-1000': {
    sets: {
      light: {
        value: 'rgb(173, 9, 85)',
      },
      dark: {
        value: 'rgb(255, 172, 202)',
      },
      darkest: {
        value: 'rgb(255, 152, 191)',
      },
      wireframe: {
        value: 'rgb(133, 161, 219)',
      },
    },
  },
  'magenta-1100': {
    sets: {
      light: {
        value: 'rgb(142, 0, 69)',
      },
      dark: {
        value: 'rgb(255, 198, 218)',
      },
      darkest: {
        value: 'rgb(255, 179, 207)',
      },
      wireframe: {
        value: 'rgb(114, 145, 211)',
      },
    },
  },
  'magenta-1200': {
    sets: {
      light: {
        value: 'rgb(112, 0, 55)',
      },
      dark: {
        value: 'rgb(255, 221, 233)',
      },
      darkest: {
        value: 'rgb(255, 202, 221)',
      },
      wireframe: {
        value: 'rgb(96, 130, 201)',
      },
    },
  },
  'magenta-1300': {
    sets: {
      light: {
        value: 'rgb(84, 3, 42)',
      },
      dark: {
        value: 'rgb(255, 240, 245)',
      },
      darkest: {
        value: 'rgb(255, 221, 233)',
      },
      wireframe: {
        value: 'rgb(82, 117, 192)',
      },
    },
  },
  'magenta-1400': {
    sets: {
      light: {
        value: 'rgb(60, 6, 29)',
      },
      dark: {
        value: 'rgb(255, 252, 253)',
      },
      darkest: {
        value: 'rgb(255, 236, 243)',
      },
      wireframe: {
        value: 'rgb(74, 109, 184)',
      },
    },
  },
} as const

export const spectrumLight = {
  black: black.value,
  white: white.value,
  gray: {
    50: colors['gray-50']['sets']['light']['value'],
    75: colors['gray-75']['sets']['light']['value'],
    100: colors['gray-100']['sets']['light']['value'],
    200: colors['gray-200']['sets']['light']['value'],
    300: colors['gray-300']['sets']['light']['value'],
    400: colors['gray-400']['sets']['light']['value'],
    500: colors['gray-500']['sets']['light']['value'],
    600: colors['gray-600']['sets']['light']['value'],
    700: colors['gray-700']['sets']['light']['value'],
    800: colors['gray-800']['sets']['light']['value'],
    900: colors['gray-900']['sets']['light']['value'],
  },
  red: {
    100: colors['red-100']['sets']['light']['value'],
    200: colors['red-200']['sets']['light']['value'],
    300: colors['red-300']['sets']['light']['value'],
    400: colors['red-400']['sets']['light']['value'],
    500: colors['red-500']['sets']['light']['value'],
    600: colors['red-600']['sets']['light']['value'],
    700: colors['red-700']['sets']['light']['value'],
    800: colors['red-800']['sets']['light']['value'],
    900: colors['red-900']['sets']['light']['value'],
    1000: colors['red-1000']['sets']['light']['value'],
    1100: colors['red-1100']['sets']['light']['value'],
    1200: colors['red-1200']['sets']['light']['value'],
    1300: colors['red-1300']['sets']['light']['value'],
    1400: colors['red-1400']['sets']['light']['value'],
  },
  orange: {
    100: colors['orange-100']['sets']['light']['value'],
    200: colors['orange-200']['sets']['light']['value'],
    300: colors['orange-300']['sets']['light']['value'],
    400: colors['orange-400']['sets']['light']['value'],
    500: colors['orange-500']['sets']['light']['value'],
    600: colors['orange-600']['sets']['light']['value'],
    700: colors['orange-700']['sets']['light']['value'],
    800: colors['orange-800']['sets']['light']['value'],
    900: colors['orange-900']['sets']['light']['value'],
    1000: colors['orange-1000']['sets']['light']['value'],
    1100: colors['orange-1100']['sets']['light']['value'],
    1200: colors['orange-1200']['sets']['light']['value'],
    1300: colors['orange-1300']['sets']['light']['value'],
    1400: colors['orange-1400']['sets']['light']['value'],
  },
  yellow: {
    100: colors['yellow-100']['sets']['light']['value'],
    200: colors['yellow-200']['sets']['light']['value'],
    300: colors['yellow-300']['sets']['light']['value'],
    400: colors['yellow-400']['sets']['light']['value'],
    500: colors['yellow-500']['sets']['light']['value'],
    600: colors['yellow-600']['sets']['light']['value'],
    700: colors['yellow-700']['sets']['light']['value'],
    800: colors['yellow-800']['sets']['light']['value'],
    900: colors['yellow-900']['sets']['light']['value'],
    1000: colors['yellow-1000']['sets']['light']['value'],
    1100: colors['yellow-1100']['sets']['light']['value'],
    1200: colors['yellow-1200']['sets']['light']['value'],
    1300: colors['yellow-1300']['sets']['light']['value'],
    1400: colors['yellow-1400']['sets']['light']['value'],
  },
  chartreuse: {
    100: colors['chartreuse-100']['sets']['light']['value'],
    200: colors['chartreuse-200']['sets']['light']['value'],
    300: colors['chartreuse-300']['sets']['light']['value'],
    400: colors['chartreuse-400']['sets']['light']['value'],
    500: colors['chartreuse-500']['sets']['light']['value'],
    600: colors['chartreuse-600']['sets']['light']['value'],
    700: colors['chartreuse-700']['sets']['light']['value'],
    800: colors['chartreuse-800']['sets']['light']['value'],
    900: colors['chartreuse-900']['sets']['light']['value'],
    1000: colors['chartreuse-1000']['sets']['light']['value'],
    1100: colors['chartreuse-1100']['sets']['light']['value'],
    1200: colors['chartreuse-1200']['sets']['light']['value'],
    1300: colors['chartreuse-1300']['sets']['light']['value'],
    1400: colors['chartreuse-1400']['sets']['light']['value'],
  },
  celery: {
    100: colors['celery-100']['sets']['light']['value'],
    200: colors['celery-200']['sets']['light']['value'],
    300: colors['celery-300']['sets']['light']['value'],
    400: colors['celery-400']['sets']['light']['value'],
    500: colors['celery-500']['sets']['light']['value'],
    600: colors['celery-600']['sets']['light']['value'],
    700: colors['celery-700']['sets']['light']['value'],
    800: colors['celery-800']['sets']['light']['value'],
    900: colors['celery-900']['sets']['light']['value'],
    1000: colors['celery-1000']['sets']['light']['value'],
    1100: colors['celery-1100']['sets']['light']['value'],
    1200: colors['celery-1200']['sets']['light']['value'],
    1300: colors['celery-1300']['sets']['light']['value'],
    1400: colors['celery-1400']['sets']['light']['value'],
  },
  green: {
    100: colors['green-100']['sets']['light']['value'],
    200: colors['green-200']['sets']['light']['value'],
    300: colors['green-300']['sets']['light']['value'],
    400: colors['green-400']['sets']['light']['value'],
    500: colors['green-500']['sets']['light']['value'],
    600: colors['green-600']['sets']['light']['value'],
    700: colors['green-700']['sets']['light']['value'],
    800: colors['green-800']['sets']['light']['value'],
    900: colors['green-900']['sets']['light']['value'],
    1000: colors['green-1000']['sets']['light']['value'],
    1100: colors['green-1100']['sets']['light']['value'],
    1200: colors['green-1200']['sets']['light']['value'],
    1300: colors['green-1300']['sets']['light']['value'],
    1400: colors['green-1400']['sets']['light']['value'],
  },
  seafoam: {
    100: colors['seafoam-100']['sets']['light']['value'],
    200: colors['seafoam-200']['sets']['light']['value'],
    300: colors['seafoam-300']['sets']['light']['value'],
    400: colors['seafoam-400']['sets']['light']['value'],
    500: colors['seafoam-500']['sets']['light']['value'],
    600: colors['seafoam-600']['sets']['light']['value'],
    700: colors['seafoam-700']['sets']['light']['value'],
    800: colors['seafoam-800']['sets']['light']['value'],
    900: colors['seafoam-900']['sets']['light']['value'],
    1000: colors['seafoam-1000']['sets']['light']['value'],
    1100: colors['seafoam-1100']['sets']['light']['value'],
    1200: colors['seafoam-1200']['sets']['light']['value'],
    1300: colors['seafoam-1300']['sets']['light']['value'],
    1400: colors['seafoam-1400']['sets']['light']['value'],
  },
  cyan: {
    100: colors['cyan-100']['sets']['light']['value'],
    200: colors['cyan-200']['sets']['light']['value'],
    300: colors['cyan-300']['sets']['light']['value'],
    400: colors['cyan-400']['sets']['light']['value'],
    500: colors['cyan-500']['sets']['light']['value'],
    600: colors['cyan-600']['sets']['light']['value'],
    700: colors['cyan-700']['sets']['light']['value'],
    800: colors['cyan-800']['sets']['light']['value'],
    900: colors['cyan-900']['sets']['light']['value'],
    1000: colors['cyan-1000']['sets']['light']['value'],
    1100: colors['cyan-1100']['sets']['light']['value'],
    1200: colors['cyan-1200']['sets']['light']['value'],
    1300: colors['cyan-1300']['sets']['light']['value'],
    1400: colors['cyan-1400']['sets']['light']['value'],
  },
  blue: {
    100: colors['blue-100']['sets']['light']['value'],
    200: colors['blue-200']['sets']['light']['value'],
    300: colors['blue-300']['sets']['light']['value'],
    400: colors['blue-400']['sets']['light']['value'],
    500: colors['blue-500']['sets']['light']['value'],
    600: colors['blue-600']['sets']['light']['value'],
    700: colors['blue-700']['sets']['light']['value'],
    800: colors['blue-800']['sets']['light']['value'],
    900: colors['blue-900']['sets']['light']['value'],
    1000: colors['blue-1000']['sets']['light']['value'],
    1100: colors['blue-1100']['sets']['light']['value'],
    1200: colors['blue-1200']['sets']['light']['value'],
    1300: colors['blue-1300']['sets']['light']['value'],
    1400: colors['blue-1400']['sets']['light']['value'],
  },
  indigo: {
    100: colors['indigo-100']['sets']['light']['value'],
    200: colors['indigo-200']['sets']['light']['value'],
    300: colors['indigo-300']['sets']['light']['value'],
    400: colors['indigo-400']['sets']['light']['value'],
    500: colors['indigo-500']['sets']['light']['value'],
    600: colors['indigo-600']['sets']['light']['value'],
    700: colors['indigo-700']['sets']['light']['value'],
    800: colors['indigo-800']['sets']['light']['value'],
    900: colors['indigo-900']['sets']['light']['value'],
    1000: colors['indigo-1000']['sets']['light']['value'],
    1100: colors['indigo-1100']['sets']['light']['value'],
    1200: colors['indigo-1200']['sets']['light']['value'],
    1300: colors['indigo-1300']['sets']['light']['value'],
    1400: colors['indigo-1400']['sets']['light']['value'],
  },
  purple: {
    100: colors['purple-100']['sets']['light']['value'],
    200: colors['purple-200']['sets']['light']['value'],
    300: colors['purple-300']['sets']['light']['value'],
    400: colors['purple-400']['sets']['light']['value'],
    500: colors['purple-500']['sets']['light']['value'],
    600: colors['purple-600']['sets']['light']['value'],
    700: colors['purple-700']['sets']['light']['value'],
    800: colors['purple-800']['sets']['light']['value'],
    900: colors['purple-900']['sets']['light']['value'],
    1000: colors['purple-1000']['sets']['light']['value'],
    1100: colors['purple-1100']['sets']['light']['value'],
    1200: colors['purple-1200']['sets']['light']['value'],
    1300: colors['purple-1300']['sets']['light']['value'],
    1400: colors['purple-1400']['sets']['light']['value'],
  },
  fuchsia: {
    100: colors['fuchsia-100']['sets']['light']['value'],
    200: colors['fuchsia-200']['sets']['light']['value'],
    300: colors['fuchsia-300']['sets']['light']['value'],
    400: colors['fuchsia-400']['sets']['light']['value'],
    500: colors['fuchsia-500']['sets']['light']['value'],
    600: colors['fuchsia-600']['sets']['light']['value'],
    700: colors['fuchsia-700']['sets']['light']['value'],
    800: colors['fuchsia-800']['sets']['light']['value'],
    900: colors['fuchsia-900']['sets']['light']['value'],
    1000: colors['fuchsia-1000']['sets']['light']['value'],
    1100: colors['fuchsia-1100']['sets']['light']['value'],
    1200: colors['fuchsia-1200']['sets']['light']['value'],
    1300: colors['fuchsia-1300']['sets']['light']['value'],
    1400: colors['fuchsia-1400']['sets']['light']['value'],
  },
  magenta: {
    100: colors['magenta-100']['sets']['light']['value'],
    200: colors['magenta-200']['sets']['light']['value'],
    300: colors['magenta-300']['sets']['light']['value'],
    400: colors['magenta-400']['sets']['light']['value'],
    500: colors['magenta-500']['sets']['light']['value'],
    600: colors['magenta-600']['sets']['light']['value'],
    700: colors['magenta-700']['sets']['light']['value'],
    800: colors['magenta-800']['sets']['light']['value'],
    900: colors['magenta-900']['sets']['light']['value'],
    1000: colors['magenta-1000']['sets']['light']['value'],
    1100: colors['magenta-1100']['sets']['light']['value'],
    1200: colors['magenta-1200']['sets']['light']['value'],
    1300: colors['magenta-1300']['sets']['light']['value'],
    1400: colors['magenta-1400']['sets']['light']['value'],
  },
} as const

export const spectrumDark = {
  black: black.value,
  white: white.value,
  gray: {
    50: colors['gray-50']['sets']['dark']['value'],
    75: colors['gray-75']['sets']['dark']['value'],
    100: colors['gray-100']['sets']['dark']['value'],
    200: colors['gray-200']['sets']['dark']['value'],
    300: colors['gray-300']['sets']['dark']['value'],
    400: colors['gray-400']['sets']['dark']['value'],
    500: colors['gray-500']['sets']['dark']['value'],
    600: colors['gray-600']['sets']['dark']['value'],
    700: colors['gray-700']['sets']['dark']['value'],
    800: colors['gray-800']['sets']['dark']['value'],
    900: colors['gray-900']['sets']['dark']['value'],
  },
  red: {
    100: colors['red-100']['sets']['dark']['value'],
    200: colors['red-200']['sets']['dark']['value'],
    300: colors['red-300']['sets']['dark']['value'],
    400: colors['red-400']['sets']['dark']['value'],
    500: colors['red-500']['sets']['dark']['value'],
    600: colors['red-600']['sets']['dark']['value'],
    700: colors['red-700']['sets']['dark']['value'],
    800: colors['red-800']['sets']['dark']['value'],
    900: colors['red-900']['sets']['dark']['value'],
    1000: colors['red-1000']['sets']['dark']['value'],
    1100: colors['red-1100']['sets']['dark']['value'],
    1200: colors['red-1200']['sets']['dark']['value'],
    1300: colors['red-1300']['sets']['dark']['value'],
    1400: colors['red-1400']['sets']['dark']['value'],
  },
  orange: {
    100: colors['orange-100']['sets']['dark']['value'],
    200: colors['orange-200']['sets']['dark']['value'],
    300: colors['orange-300']['sets']['dark']['value'],
    400: colors['orange-400']['sets']['dark']['value'],
    500: colors['orange-500']['sets']['dark']['value'],
    600: colors['orange-600']['sets']['dark']['value'],
    700: colors['orange-700']['sets']['dark']['value'],
    800: colors['orange-800']['sets']['dark']['value'],
    900: colors['orange-900']['sets']['dark']['value'],
    1000: colors['orange-1000']['sets']['dark']['value'],
    1100: colors['orange-1100']['sets']['dark']['value'],
    1200: colors['orange-1200']['sets']['dark']['value'],
    1300: colors['orange-1300']['sets']['dark']['value'],
    1400: colors['orange-1400']['sets']['dark']['value'],
  },
  yellow: {
    100: colors['yellow-100']['sets']['dark']['value'],
    200: colors['yellow-200']['sets']['dark']['value'],
    300: colors['yellow-300']['sets']['dark']['value'],
    400: colors['yellow-400']['sets']['dark']['value'],
    500: colors['yellow-500']['sets']['dark']['value'],
    600: colors['yellow-600']['sets']['dark']['value'],
    700: colors['yellow-700']['sets']['dark']['value'],
    800: colors['yellow-800']['sets']['dark']['value'],
    900: colors['yellow-900']['sets']['dark']['value'],
    1000: colors['yellow-1000']['sets']['dark']['value'],
    1100: colors['yellow-1100']['sets']['dark']['value'],
    1200: colors['yellow-1200']['sets']['dark']['value'],
    1300: colors['yellow-1300']['sets']['dark']['value'],
    1400: colors['yellow-1400']['sets']['dark']['value'],
  },
  chartreuse: {
    100: colors['chartreuse-100']['sets']['dark']['value'],
    200: colors['chartreuse-200']['sets']['dark']['value'],
    300: colors['chartreuse-300']['sets']['dark']['value'],
    400: colors['chartreuse-400']['sets']['dark']['value'],
    500: colors['chartreuse-500']['sets']['dark']['value'],
    600: colors['chartreuse-600']['sets']['dark']['value'],
    700: colors['chartreuse-700']['sets']['dark']['value'],
    800: colors['chartreuse-800']['sets']['dark']['value'],
    900: colors['chartreuse-900']['sets']['dark']['value'],
    1000: colors['chartreuse-1000']['sets']['dark']['value'],
    1100: colors['chartreuse-1100']['sets']['dark']['value'],
    1200: colors['chartreuse-1200']['sets']['dark']['value'],
    1300: colors['chartreuse-1300']['sets']['dark']['value'],
    1400: colors['chartreuse-1400']['sets']['dark']['value'],
  },
  celery: {
    100: colors['celery-100']['sets']['dark']['value'],
    200: colors['celery-200']['sets']['dark']['value'],
    300: colors['celery-300']['sets']['dark']['value'],
    400: colors['celery-400']['sets']['dark']['value'],
    500: colors['celery-500']['sets']['dark']['value'],
    600: colors['celery-600']['sets']['dark']['value'],
    700: colors['celery-700']['sets']['dark']['value'],
    800: colors['celery-800']['sets']['dark']['value'],
    900: colors['celery-900']['sets']['dark']['value'],
    1000: colors['celery-1000']['sets']['dark']['value'],
    1100: colors['celery-1100']['sets']['dark']['value'],
    1200: colors['celery-1200']['sets']['dark']['value'],
    1300: colors['celery-1300']['sets']['dark']['value'],
    1400: colors['celery-1400']['sets']['dark']['value'],
  },
  green: {
    100: colors['green-100']['sets']['dark']['value'],
    200: colors['green-200']['sets']['dark']['value'],
    300: colors['green-300']['sets']['dark']['value'],
    400: colors['green-400']['sets']['dark']['value'],
    500: colors['green-500']['sets']['dark']['value'],
    600: colors['green-600']['sets']['dark']['value'],
    700: colors['green-700']['sets']['dark']['value'],
    800: colors['green-800']['sets']['dark']['value'],
    900: colors['green-900']['sets']['dark']['value'],
    1000: colors['green-1000']['sets']['dark']['value'],
    1100: colors['green-1100']['sets']['dark']['value'],
    1200: colors['green-1200']['sets']['dark']['value'],
    1300: colors['green-1300']['sets']['dark']['value'],
    1400: colors['green-1400']['sets']['dark']['value'],
  },
  seafoam: {
    100: colors['seafoam-100']['sets']['dark']['value'],
    200: colors['seafoam-200']['sets']['dark']['value'],
    300: colors['seafoam-300']['sets']['dark']['value'],
    400: colors['seafoam-400']['sets']['dark']['value'],
    500: colors['seafoam-500']['sets']['dark']['value'],
    600: colors['seafoam-600']['sets']['dark']['value'],
    700: colors['seafoam-700']['sets']['dark']['value'],
    800: colors['seafoam-800']['sets']['dark']['value'],
    900: colors['seafoam-900']['sets']['dark']['value'],
    1000: colors['seafoam-1000']['sets']['dark']['value'],
    1100: colors['seafoam-1100']['sets']['dark']['value'],
    1200: colors['seafoam-1200']['sets']['dark']['value'],
    1300: colors['seafoam-1300']['sets']['dark']['value'],
    1400: colors['seafoam-1400']['sets']['dark']['value'],
  },
  cyan: {
    100: colors['cyan-100']['sets']['dark']['value'],
    200: colors['cyan-200']['sets']['dark']['value'],
    300: colors['cyan-300']['sets']['dark']['value'],
    400: colors['cyan-400']['sets']['dark']['value'],
    500: colors['cyan-500']['sets']['dark']['value'],
    600: colors['cyan-600']['sets']['dark']['value'],
    700: colors['cyan-700']['sets']['dark']['value'],
    800: colors['cyan-800']['sets']['dark']['value'],
    900: colors['cyan-900']['sets']['dark']['value'],
    1000: colors['cyan-1000']['sets']['dark']['value'],
    1100: colors['cyan-1100']['sets']['dark']['value'],
    1200: colors['cyan-1200']['sets']['dark']['value'],
    1300: colors['cyan-1300']['sets']['dark']['value'],
    1400: colors['cyan-1400']['sets']['dark']['value'],
  },
  blue: {
    100: colors['blue-100']['sets']['dark']['value'],
    200: colors['blue-200']['sets']['dark']['value'],
    300: colors['blue-300']['sets']['dark']['value'],
    400: colors['blue-400']['sets']['dark']['value'],
    500: colors['blue-500']['sets']['dark']['value'],
    600: colors['blue-600']['sets']['dark']['value'],
    700: colors['blue-700']['sets']['dark']['value'],
    800: colors['blue-800']['sets']['dark']['value'],
    900: colors['blue-900']['sets']['dark']['value'],
    1000: colors['blue-1000']['sets']['dark']['value'],
    1100: colors['blue-1100']['sets']['dark']['value'],
    1200: colors['blue-1200']['sets']['dark']['value'],
    1300: colors['blue-1300']['sets']['dark']['value'],
    1400: colors['blue-1400']['sets']['dark']['value'],
  },
  indigo: {
    100: colors['indigo-100']['sets']['dark']['value'],
    200: colors['indigo-200']['sets']['dark']['value'],
    300: colors['indigo-300']['sets']['dark']['value'],
    400: colors['indigo-400']['sets']['dark']['value'],
    500: colors['indigo-500']['sets']['dark']['value'],
    600: colors['indigo-600']['sets']['dark']['value'],
    700: colors['indigo-700']['sets']['dark']['value'],
    800: colors['indigo-800']['sets']['dark']['value'],
    900: colors['indigo-900']['sets']['dark']['value'],
    1000: colors['indigo-1000']['sets']['dark']['value'],
    1100: colors['indigo-1100']['sets']['dark']['value'],
    1200: colors['indigo-1200']['sets']['dark']['value'],
    1300: colors['indigo-1300']['sets']['dark']['value'],
    1400: colors['indigo-1400']['sets']['dark']['value'],
  },
  purple: {
    100: colors['purple-100']['sets']['dark']['value'],
    200: colors['purple-200']['sets']['dark']['value'],
    300: colors['purple-300']['sets']['dark']['value'],
    400: colors['purple-400']['sets']['dark']['value'],
    500: colors['purple-500']['sets']['dark']['value'],
    600: colors['purple-600']['sets']['dark']['value'],
    700: colors['purple-700']['sets']['dark']['value'],
    800: colors['purple-800']['sets']['dark']['value'],
    900: colors['purple-900']['sets']['dark']['value'],
    1000: colors['purple-1000']['sets']['dark']['value'],
    1100: colors['purple-1100']['sets']['dark']['value'],
    1200: colors['purple-1200']['sets']['dark']['value'],
    1300: colors['purple-1300']['sets']['dark']['value'],
    1400: colors['purple-1400']['sets']['dark']['value'],
  },
  fuchsia: {
    100: colors['fuchsia-100']['sets']['dark']['value'],
    200: colors['fuchsia-200']['sets']['dark']['value'],
    300: colors['fuchsia-300']['sets']['dark']['value'],
    400: colors['fuchsia-400']['sets']['dark']['value'],
    500: colors['fuchsia-500']['sets']['dark']['value'],
    600: colors['fuchsia-600']['sets']['dark']['value'],
    700: colors['fuchsia-700']['sets']['dark']['value'],
    800: colors['fuchsia-800']['sets']['dark']['value'],
    900: colors['fuchsia-900']['sets']['dark']['value'],
    1000: colors['fuchsia-1000']['sets']['dark']['value'],
    1100: colors['fuchsia-1100']['sets']['dark']['value'],
    1200: colors['fuchsia-1200']['sets']['dark']['value'],
    1300: colors['fuchsia-1300']['sets']['dark']['value'],
    1400: colors['fuchsia-1400']['sets']['dark']['value'],
  },
  magenta: {
    100: colors['magenta-100']['sets']['dark']['value'],
    200: colors['magenta-200']['sets']['dark']['value'],
    300: colors['magenta-300']['sets']['dark']['value'],
    400: colors['magenta-400']['sets']['dark']['value'],
    500: colors['magenta-500']['sets']['dark']['value'],
    600: colors['magenta-600']['sets']['dark']['value'],
    700: colors['magenta-700']['sets']['dark']['value'],
    800: colors['magenta-800']['sets']['dark']['value'],
    900: colors['magenta-900']['sets']['dark']['value'],
    1000: colors['magenta-1000']['sets']['dark']['value'],
    1100: colors['magenta-1100']['sets']['dark']['value'],
    1200: colors['magenta-1200']['sets']['dark']['value'],
    1300: colors['magenta-1300']['sets']['dark']['value'],
    1400: colors['magenta-1400']['sets']['dark']['value'],
  },
} as const

export const spectrumDarkest = {
  black: black.value,
  white: white.value,
  gray: {
    50: colors['gray-50']['sets']['darkest']['value'],
    75: colors['gray-75']['sets']['darkest']['value'],
    100: colors['gray-100']['sets']['darkest']['value'],
    200: colors['gray-200']['sets']['darkest']['value'],
    300: colors['gray-300']['sets']['darkest']['value'],
    400: colors['gray-400']['sets']['darkest']['value'],
    500: colors['gray-500']['sets']['darkest']['value'],
    600: colors['gray-600']['sets']['darkest']['value'],
    700: colors['gray-700']['sets']['darkest']['value'],
    800: colors['gray-800']['sets']['darkest']['value'],
    900: colors['gray-900']['sets']['darkest']['value'],
  },
  red: {
    100: colors['red-100']['sets']['darkest']['value'],
    200: colors['red-200']['sets']['darkest']['value'],
    300: colors['red-300']['sets']['darkest']['value'],
    400: colors['red-400']['sets']['darkest']['value'],
    500: colors['red-500']['sets']['darkest']['value'],
    600: colors['red-600']['sets']['darkest']['value'],
    700: colors['red-700']['sets']['darkest']['value'],
    800: colors['red-800']['sets']['darkest']['value'],
    900: colors['red-900']['sets']['darkest']['value'],
    1000: colors['red-1000']['sets']['darkest']['value'],
    1100: colors['red-1100']['sets']['darkest']['value'],
    1200: colors['red-1200']['sets']['darkest']['value'],
    1300: colors['red-1300']['sets']['darkest']['value'],
    1400: colors['red-1400']['sets']['darkest']['value'],
  },
  orange: {
    100: colors['orange-100']['sets']['darkest']['value'],
    200: colors['orange-200']['sets']['darkest']['value'],
    300: colors['orange-300']['sets']['darkest']['value'],
    400: colors['orange-400']['sets']['darkest']['value'],
    500: colors['orange-500']['sets']['darkest']['value'],
    600: colors['orange-600']['sets']['darkest']['value'],
    700: colors['orange-700']['sets']['darkest']['value'],
    800: colors['orange-800']['sets']['darkest']['value'],
    900: colors['orange-900']['sets']['darkest']['value'],
    1000: colors['orange-1000']['sets']['darkest']['value'],
    1100: colors['orange-1100']['sets']['darkest']['value'],
    1200: colors['orange-1200']['sets']['darkest']['value'],
    1300: colors['orange-1300']['sets']['darkest']['value'],
    1400: colors['orange-1400']['sets']['darkest']['value'],
  },
  yellow: {
    100: colors['yellow-100']['sets']['darkest']['value'],
    200: colors['yellow-200']['sets']['darkest']['value'],
    300: colors['yellow-300']['sets']['darkest']['value'],
    400: colors['yellow-400']['sets']['darkest']['value'],
    500: colors['yellow-500']['sets']['darkest']['value'],
    600: colors['yellow-600']['sets']['darkest']['value'],
    700: colors['yellow-700']['sets']['darkest']['value'],
    800: colors['yellow-800']['sets']['darkest']['value'],
    900: colors['yellow-900']['sets']['darkest']['value'],
    1000: colors['yellow-1000']['sets']['darkest']['value'],
    1100: colors['yellow-1100']['sets']['darkest']['value'],
    1200: colors['yellow-1200']['sets']['darkest']['value'],
    1300: colors['yellow-1300']['sets']['darkest']['value'],
    1400: colors['yellow-1400']['sets']['darkest']['value'],
  },
  chartreuse: {
    100: colors['chartreuse-100']['sets']['darkest']['value'],
    200: colors['chartreuse-200']['sets']['darkest']['value'],
    300: colors['chartreuse-300']['sets']['darkest']['value'],
    400: colors['chartreuse-400']['sets']['darkest']['value'],
    500: colors['chartreuse-500']['sets']['darkest']['value'],
    600: colors['chartreuse-600']['sets']['darkest']['value'],
    700: colors['chartreuse-700']['sets']['darkest']['value'],
    800: colors['chartreuse-800']['sets']['darkest']['value'],
    900: colors['chartreuse-900']['sets']['darkest']['value'],
    1000: colors['chartreuse-1000']['sets']['darkest']['value'],
    1100: colors['chartreuse-1100']['sets']['darkest']['value'],
    1200: colors['chartreuse-1200']['sets']['darkest']['value'],
    1300: colors['chartreuse-1300']['sets']['darkest']['value'],
    1400: colors['chartreuse-1400']['sets']['darkest']['value'],
  },
  celery: {
    100: colors['celery-100']['sets']['darkest']['value'],
    200: colors['celery-200']['sets']['darkest']['value'],
    300: colors['celery-300']['sets']['darkest']['value'],
    400: colors['celery-400']['sets']['darkest']['value'],
    500: colors['celery-500']['sets']['darkest']['value'],
    600: colors['celery-600']['sets']['darkest']['value'],
    700: colors['celery-700']['sets']['darkest']['value'],
    800: colors['celery-800']['sets']['darkest']['value'],
    900: colors['celery-900']['sets']['darkest']['value'],
    1000: colors['celery-1000']['sets']['darkest']['value'],
    1100: colors['celery-1100']['sets']['darkest']['value'],
    1200: colors['celery-1200']['sets']['darkest']['value'],
    1300: colors['celery-1300']['sets']['darkest']['value'],
    1400: colors['celery-1400']['sets']['darkest']['value'],
  },
  green: {
    100: colors['green-100']['sets']['darkest']['value'],
    200: colors['green-200']['sets']['darkest']['value'],
    300: colors['green-300']['sets']['darkest']['value'],
    400: colors['green-400']['sets']['darkest']['value'],
    500: colors['green-500']['sets']['darkest']['value'],
    600: colors['green-600']['sets']['darkest']['value'],
    700: colors['green-700']['sets']['darkest']['value'],
    800: colors['green-800']['sets']['darkest']['value'],
    900: colors['green-900']['sets']['darkest']['value'],
    1000: colors['green-1000']['sets']['darkest']['value'],
    1100: colors['green-1100']['sets']['darkest']['value'],
    1200: colors['green-1200']['sets']['darkest']['value'],
    1300: colors['green-1300']['sets']['darkest']['value'],
    1400: colors['green-1400']['sets']['darkest']['value'],
  },
  seafoam: {
    100: colors['seafoam-100']['sets']['darkest']['value'],
    200: colors['seafoam-200']['sets']['darkest']['value'],
    300: colors['seafoam-300']['sets']['darkest']['value'],
    400: colors['seafoam-400']['sets']['darkest']['value'],
    500: colors['seafoam-500']['sets']['darkest']['value'],
    600: colors['seafoam-600']['sets']['darkest']['value'],
    700: colors['seafoam-700']['sets']['darkest']['value'],
    800: colors['seafoam-800']['sets']['darkest']['value'],
    900: colors['seafoam-900']['sets']['darkest']['value'],
    1000: colors['seafoam-1000']['sets']['darkest']['value'],
    1100: colors['seafoam-1100']['sets']['darkest']['value'],
    1200: colors['seafoam-1200']['sets']['darkest']['value'],
    1300: colors['seafoam-1300']['sets']['darkest']['value'],
    1400: colors['seafoam-1400']['sets']['darkest']['value'],
  },
  cyan: {
    100: colors['cyan-100']['sets']['darkest']['value'],
    200: colors['cyan-200']['sets']['darkest']['value'],
    300: colors['cyan-300']['sets']['darkest']['value'],
    400: colors['cyan-400']['sets']['darkest']['value'],
    500: colors['cyan-500']['sets']['darkest']['value'],
    600: colors['cyan-600']['sets']['darkest']['value'],
    700: colors['cyan-700']['sets']['darkest']['value'],
    800: colors['cyan-800']['sets']['darkest']['value'],
    900: colors['cyan-900']['sets']['darkest']['value'],
    1000: colors['cyan-1000']['sets']['darkest']['value'],
    1100: colors['cyan-1100']['sets']['darkest']['value'],
    1200: colors['cyan-1200']['sets']['darkest']['value'],
    1300: colors['cyan-1300']['sets']['darkest']['value'],
    1400: colors['cyan-1400']['sets']['darkest']['value'],
  },
  blue: {
    100: colors['blue-100']['sets']['darkest']['value'],
    200: colors['blue-200']['sets']['darkest']['value'],
    300: colors['blue-300']['sets']['darkest']['value'],
    400: colors['blue-400']['sets']['darkest']['value'],
    500: colors['blue-500']['sets']['darkest']['value'],
    600: colors['blue-600']['sets']['darkest']['value'],
    700: colors['blue-700']['sets']['darkest']['value'],
    800: colors['blue-800']['sets']['darkest']['value'],
    900: colors['blue-900']['sets']['darkest']['value'],
    1000: colors['blue-1000']['sets']['darkest']['value'],
    1100: colors['blue-1100']['sets']['darkest']['value'],
    1200: colors['blue-1200']['sets']['darkest']['value'],
    1300: colors['blue-1300']['sets']['darkest']['value'],
    1400: colors['blue-1400']['sets']['darkest']['value'],
  },
  indigo: {
    100: colors['indigo-100']['sets']['darkest']['value'],
    200: colors['indigo-200']['sets']['darkest']['value'],
    300: colors['indigo-300']['sets']['darkest']['value'],
    400: colors['indigo-400']['sets']['darkest']['value'],
    500: colors['indigo-500']['sets']['darkest']['value'],
    600: colors['indigo-600']['sets']['darkest']['value'],
    700: colors['indigo-700']['sets']['darkest']['value'],
    800: colors['indigo-800']['sets']['darkest']['value'],
    900: colors['indigo-900']['sets']['darkest']['value'],
    1000: colors['indigo-1000']['sets']['darkest']['value'],
    1100: colors['indigo-1100']['sets']['darkest']['value'],
    1200: colors['indigo-1200']['sets']['darkest']['value'],
    1300: colors['indigo-1300']['sets']['darkest']['value'],
    1400: colors['indigo-1400']['sets']['darkest']['value'],
  },
  purple: {
    100: colors['purple-100']['sets']['darkest']['value'],
    200: colors['purple-200']['sets']['darkest']['value'],
    300: colors['purple-300']['sets']['darkest']['value'],
    400: colors['purple-400']['sets']['darkest']['value'],
    500: colors['purple-500']['sets']['darkest']['value'],
    600: colors['purple-600']['sets']['darkest']['value'],
    700: colors['purple-700']['sets']['darkest']['value'],
    800: colors['purple-800']['sets']['darkest']['value'],
    900: colors['purple-900']['sets']['darkest']['value'],
    1000: colors['purple-1000']['sets']['darkest']['value'],
    1100: colors['purple-1100']['sets']['darkest']['value'],
    1200: colors['purple-1200']['sets']['darkest']['value'],
    1300: colors['purple-1300']['sets']['darkest']['value'],
    1400: colors['purple-1400']['sets']['darkest']['value'],
  },
  fuchsia: {
    100: colors['fuchsia-100']['sets']['darkest']['value'],
    200: colors['fuchsia-200']['sets']['darkest']['value'],
    300: colors['fuchsia-300']['sets']['darkest']['value'],
    400: colors['fuchsia-400']['sets']['darkest']['value'],
    500: colors['fuchsia-500']['sets']['darkest']['value'],
    600: colors['fuchsia-600']['sets']['darkest']['value'],
    700: colors['fuchsia-700']['sets']['darkest']['value'],
    800: colors['fuchsia-800']['sets']['darkest']['value'],
    900: colors['fuchsia-900']['sets']['darkest']['value'],
    1000: colors['fuchsia-1000']['sets']['darkest']['value'],
    1100: colors['fuchsia-1100']['sets']['darkest']['value'],
    1200: colors['fuchsia-1200']['sets']['darkest']['value'],
    1300: colors['fuchsia-1300']['sets']['darkest']['value'],
    1400: colors['fuchsia-1400']['sets']['darkest']['value'],
  },
  magenta: {
    100: colors['magenta-100']['sets']['darkest']['value'],
    200: colors['magenta-200']['sets']['darkest']['value'],
    300: colors['magenta-300']['sets']['darkest']['value'],
    400: colors['magenta-400']['sets']['darkest']['value'],
    500: colors['magenta-500']['sets']['darkest']['value'],
    600: colors['magenta-600']['sets']['darkest']['value'],
    700: colors['magenta-700']['sets']['darkest']['value'],
    800: colors['magenta-800']['sets']['darkest']['value'],
    900: colors['magenta-900']['sets']['darkest']['value'],
    1000: colors['magenta-1000']['sets']['darkest']['value'],
    1100: colors['magenta-1100']['sets']['darkest']['value'],
    1200: colors['magenta-1200']['sets']['darkest']['value'],
    1300: colors['magenta-1300']['sets']['darkest']['value'],
    1400: colors['magenta-1400']['sets']['darkest']['value'],
  },
} as const

export const spectrumWireframe = {
  black: black.value,
  white: white.value,
  gray: {
    50: colors['gray-50']['sets']['wireframe']['value'],
    75: colors['gray-75']['sets']['wireframe']['value'],
    100: colors['gray-100']['sets']['wireframe']['value'],
    200: colors['gray-200']['sets']['wireframe']['value'],
    300: colors['gray-300']['sets']['wireframe']['value'],
    400: colors['gray-400']['sets']['wireframe']['value'],
    500: colors['gray-500']['sets']['wireframe']['value'],
    600: colors['gray-600']['sets']['wireframe']['value'],
    700: colors['gray-700']['sets']['wireframe']['value'],
    800: colors['gray-800']['sets']['wireframe']['value'],
    900: colors['gray-900']['sets']['wireframe']['value'],
  },
  red: {
    100: colors['red-100']['sets']['wireframe']['value'],
    200: colors['red-200']['sets']['wireframe']['value'],
    300: colors['red-300']['sets']['wireframe']['value'],
    400: colors['red-400']['sets']['wireframe']['value'],
    500: colors['red-500']['sets']['wireframe']['value'],
    600: colors['red-600']['sets']['wireframe']['value'],
    700: colors['red-700']['sets']['wireframe']['value'],
    800: colors['red-800']['sets']['wireframe']['value'],
    900: colors['red-900']['sets']['wireframe']['value'],
    1000: colors['red-1000']['sets']['wireframe']['value'],
    1100: colors['red-1100']['sets']['wireframe']['value'],
    1200: colors['red-1200']['sets']['wireframe']['value'],
    1300: colors['red-1300']['sets']['wireframe']['value'],
    1400: colors['red-1400']['sets']['wireframe']['value'],
  },
  orange: {
    100: colors['orange-100']['sets']['wireframe']['value'],
    200: colors['orange-200']['sets']['wireframe']['value'],
    300: colors['orange-300']['sets']['wireframe']['value'],
    400: colors['orange-400']['sets']['wireframe']['value'],
    500: colors['orange-500']['sets']['wireframe']['value'],
    600: colors['orange-600']['sets']['wireframe']['value'],
    700: colors['orange-700']['sets']['wireframe']['value'],
    800: colors['orange-800']['sets']['wireframe']['value'],
    900: colors['orange-900']['sets']['wireframe']['value'],
    1000: colors['orange-1000']['sets']['wireframe']['value'],
    1100: colors['orange-1100']['sets']['wireframe']['value'],
    1200: colors['orange-1200']['sets']['wireframe']['value'],
    1300: colors['orange-1300']['sets']['wireframe']['value'],
    1400: colors['orange-1400']['sets']['wireframe']['value'],
  },
  yellow: {
    100: colors['yellow-100']['sets']['wireframe']['value'],
    200: colors['yellow-200']['sets']['wireframe']['value'],
    300: colors['yellow-300']['sets']['wireframe']['value'],
    400: colors['yellow-400']['sets']['wireframe']['value'],
    500: colors['yellow-500']['sets']['wireframe']['value'],
    600: colors['yellow-600']['sets']['wireframe']['value'],
    700: colors['yellow-700']['sets']['wireframe']['value'],
    800: colors['yellow-800']['sets']['wireframe']['value'],
    900: colors['yellow-900']['sets']['wireframe']['value'],
    1000: colors['yellow-1000']['sets']['wireframe']['value'],
    1100: colors['yellow-1100']['sets']['wireframe']['value'],
    1200: colors['yellow-1200']['sets']['wireframe']['value'],
    1300: colors['yellow-1300']['sets']['wireframe']['value'],
    1400: colors['yellow-1400']['sets']['wireframe']['value'],
  },
  chartreuse: {
    100: colors['chartreuse-100']['sets']['wireframe']['value'],
    200: colors['chartreuse-200']['sets']['wireframe']['value'],
    300: colors['chartreuse-300']['sets']['wireframe']['value'],
    400: colors['chartreuse-400']['sets']['wireframe']['value'],
    500: colors['chartreuse-500']['sets']['wireframe']['value'],
    600: colors['chartreuse-600']['sets']['wireframe']['value'],
    700: colors['chartreuse-700']['sets']['wireframe']['value'],
    800: colors['chartreuse-800']['sets']['wireframe']['value'],
    900: colors['chartreuse-900']['sets']['wireframe']['value'],
    1000: colors['chartreuse-1000']['sets']['wireframe']['value'],
    1100: colors['chartreuse-1100']['sets']['wireframe']['value'],
    1200: colors['chartreuse-1200']['sets']['wireframe']['value'],
    1300: colors['chartreuse-1300']['sets']['wireframe']['value'],
    1400: colors['chartreuse-1400']['sets']['wireframe']['value'],
  },
  celery: {
    100: colors['celery-100']['sets']['wireframe']['value'],
    200: colors['celery-200']['sets']['wireframe']['value'],
    300: colors['celery-300']['sets']['wireframe']['value'],
    400: colors['celery-400']['sets']['wireframe']['value'],
    500: colors['celery-500']['sets']['wireframe']['value'],
    600: colors['celery-600']['sets']['wireframe']['value'],
    700: colors['celery-700']['sets']['wireframe']['value'],
    800: colors['celery-800']['sets']['wireframe']['value'],
    900: colors['celery-900']['sets']['wireframe']['value'],
    1000: colors['celery-1000']['sets']['wireframe']['value'],
    1100: colors['celery-1100']['sets']['wireframe']['value'],
    1200: colors['celery-1200']['sets']['wireframe']['value'],
    1300: colors['celery-1300']['sets']['wireframe']['value'],
    1400: colors['celery-1400']['sets']['wireframe']['value'],
  },
  green: {
    100: colors['green-100']['sets']['wireframe']['value'],
    200: colors['green-200']['sets']['wireframe']['value'],
    300: colors['green-300']['sets']['wireframe']['value'],
    400: colors['green-400']['sets']['wireframe']['value'],
    500: colors['green-500']['sets']['wireframe']['value'],
    600: colors['green-600']['sets']['wireframe']['value'],
    700: colors['green-700']['sets']['wireframe']['value'],
    800: colors['green-800']['sets']['wireframe']['value'],
    900: colors['green-900']['sets']['wireframe']['value'],
    1000: colors['green-1000']['sets']['wireframe']['value'],
    1100: colors['green-1100']['sets']['wireframe']['value'],
    1200: colors['green-1200']['sets']['wireframe']['value'],
    1300: colors['green-1300']['sets']['wireframe']['value'],
    1400: colors['green-1400']['sets']['wireframe']['value'],
  },
  seafoam: {
    100: colors['seafoam-100']['sets']['wireframe']['value'],
    200: colors['seafoam-200']['sets']['wireframe']['value'],
    300: colors['seafoam-300']['sets']['wireframe']['value'],
    400: colors['seafoam-400']['sets']['wireframe']['value'],
    500: colors['seafoam-500']['sets']['wireframe']['value'],
    600: colors['seafoam-600']['sets']['wireframe']['value'],
    700: colors['seafoam-700']['sets']['wireframe']['value'],
    800: colors['seafoam-800']['sets']['wireframe']['value'],
    900: colors['seafoam-900']['sets']['wireframe']['value'],
    1000: colors['seafoam-1000']['sets']['wireframe']['value'],
    1100: colors['seafoam-1100']['sets']['wireframe']['value'],
    1200: colors['seafoam-1200']['sets']['wireframe']['value'],
    1300: colors['seafoam-1300']['sets']['wireframe']['value'],
    1400: colors['seafoam-1400']['sets']['wireframe']['value'],
  },
  cyan: {
    100: colors['cyan-100']['sets']['wireframe']['value'],
    200: colors['cyan-200']['sets']['wireframe']['value'],
    300: colors['cyan-300']['sets']['wireframe']['value'],
    400: colors['cyan-400']['sets']['wireframe']['value'],
    500: colors['cyan-500']['sets']['wireframe']['value'],
    600: colors['cyan-600']['sets']['wireframe']['value'],
    700: colors['cyan-700']['sets']['wireframe']['value'],
    800: colors['cyan-800']['sets']['wireframe']['value'],
    900: colors['cyan-900']['sets']['wireframe']['value'],
    1000: colors['cyan-1000']['sets']['wireframe']['value'],
    1100: colors['cyan-1100']['sets']['wireframe']['value'],
    1200: colors['cyan-1200']['sets']['wireframe']['value'],
    1300: colors['cyan-1300']['sets']['wireframe']['value'],
    1400: colors['cyan-1400']['sets']['wireframe']['value'],
  },
  blue: {
    100: colors['blue-100']['sets']['wireframe']['value'],
    200: colors['blue-200']['sets']['wireframe']['value'],
    300: colors['blue-300']['sets']['wireframe']['value'],
    400: colors['blue-400']['sets']['wireframe']['value'],
    500: colors['blue-500']['sets']['wireframe']['value'],
    600: colors['blue-600']['sets']['wireframe']['value'],
    700: colors['blue-700']['sets']['wireframe']['value'],
    800: colors['blue-800']['sets']['wireframe']['value'],
    900: colors['blue-900']['sets']['wireframe']['value'],
    1000: colors['blue-1000']['sets']['wireframe']['value'],
    1100: colors['blue-1100']['sets']['wireframe']['value'],
    1200: colors['blue-1200']['sets']['wireframe']['value'],
    1300: colors['blue-1300']['sets']['wireframe']['value'],
    1400: colors['blue-1400']['sets']['wireframe']['value'],
  },
  indigo: {
    100: colors['indigo-100']['sets']['wireframe']['value'],
    200: colors['indigo-200']['sets']['wireframe']['value'],
    300: colors['indigo-300']['sets']['wireframe']['value'],
    400: colors['indigo-400']['sets']['wireframe']['value'],
    500: colors['indigo-500']['sets']['wireframe']['value'],
    600: colors['indigo-600']['sets']['wireframe']['value'],
    700: colors['indigo-700']['sets']['wireframe']['value'],
    800: colors['indigo-800']['sets']['wireframe']['value'],
    900: colors['indigo-900']['sets']['wireframe']['value'],
    1000: colors['indigo-1000']['sets']['wireframe']['value'],
    1100: colors['indigo-1100']['sets']['wireframe']['value'],
    1200: colors['indigo-1200']['sets']['wireframe']['value'],
    1300: colors['indigo-1300']['sets']['wireframe']['value'],
    1400: colors['indigo-1400']['sets']['wireframe']['value'],
  },
  purple: {
    100: colors['purple-100']['sets']['wireframe']['value'],
    200: colors['purple-200']['sets']['wireframe']['value'],
    300: colors['purple-300']['sets']['wireframe']['value'],
    400: colors['purple-400']['sets']['wireframe']['value'],
    500: colors['purple-500']['sets']['wireframe']['value'],
    600: colors['purple-600']['sets']['wireframe']['value'],
    700: colors['purple-700']['sets']['wireframe']['value'],
    800: colors['purple-800']['sets']['wireframe']['value'],
    900: colors['purple-900']['sets']['wireframe']['value'],
    1000: colors['purple-1000']['sets']['wireframe']['value'],
    1100: colors['purple-1100']['sets']['wireframe']['value'],
    1200: colors['purple-1200']['sets']['wireframe']['value'],
    1300: colors['purple-1300']['sets']['wireframe']['value'],
    1400: colors['purple-1400']['sets']['wireframe']['value'],
  },
  fuchsia: {
    100: colors['fuchsia-100']['sets']['wireframe']['value'],
    200: colors['fuchsia-200']['sets']['wireframe']['value'],
    300: colors['fuchsia-300']['sets']['wireframe']['value'],
    400: colors['fuchsia-400']['sets']['wireframe']['value'],
    500: colors['fuchsia-500']['sets']['wireframe']['value'],
    600: colors['fuchsia-600']['sets']['wireframe']['value'],
    700: colors['fuchsia-700']['sets']['wireframe']['value'],
    800: colors['fuchsia-800']['sets']['wireframe']['value'],
    900: colors['fuchsia-900']['sets']['wireframe']['value'],
    1000: colors['fuchsia-1000']['sets']['wireframe']['value'],
    1100: colors['fuchsia-1100']['sets']['wireframe']['value'],
    1200: colors['fuchsia-1200']['sets']['wireframe']['value'],
    1300: colors['fuchsia-1300']['sets']['wireframe']['value'],
    1400: colors['fuchsia-1400']['sets']['wireframe']['value'],
  },
  magenta: {
    100: colors['magenta-100']['sets']['wireframe']['value'],
    200: colors['magenta-200']['sets']['wireframe']['value'],
    300: colors['magenta-300']['sets']['wireframe']['value'],
    400: colors['magenta-400']['sets']['wireframe']['value'],
    500: colors['magenta-500']['sets']['wireframe']['value'],
    600: colors['magenta-600']['sets']['wireframe']['value'],
    700: colors['magenta-700']['sets']['wireframe']['value'],
    800: colors['magenta-800']['sets']['wireframe']['value'],
    900: colors['magenta-900']['sets']['wireframe']['value'],
    1000: colors['magenta-1000']['sets']['wireframe']['value'],
    1100: colors['magenta-1100']['sets']['wireframe']['value'],
    1200: colors['magenta-1200']['sets']['wireframe']['value'],
    1300: colors['magenta-1300']['sets']['wireframe']['value'],
    1400: colors['magenta-1400']['sets']['wireframe']['value'],
  },
} as const

export const spectrum = {
  spectrumLight,
  spectrumDark,
  spectrumDarkest,
  spectrumWireframe,
}
