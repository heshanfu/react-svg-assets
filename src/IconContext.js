import React from 'react'

/* Default icon set */
export const icons = {
  'default': 'M 512.008 12.642 c -282.738 0 -512.008 229.218 -512.008 511.998 c 0 226.214 146.704 418.132 350.136 485.836 c 25.586 4.738 34.992 -11.11 34.992 -24.632 c 0 -12.204 -0.48 -52.542 -0.696 -95.324 c -142.448 30.976 -172.504 -60.41 -172.504 -60.41 c -23.282 -59.176 -56.848 -74.916 -56.848 -74.916 c -46.452 -31.778 3.51 -31.124 3.51 -31.124 c 51.4 3.61 78.476 52.766 78.476 52.766 c 45.672 78.27 119.776 55.64 149.004 42.558 c 4.588 -33.086 17.852 -55.68 32.506 -68.464 c -113.73 -12.942 -233.276 -56.85 -233.276 -253.032 c 0 -55.898 20.004 -101.574 52.76 -137.428 c -5.316 -12.9 -22.854 -64.972 4.952 -135.5 c 0 0 43.006 -13.752 140.84 52.49 c 40.836 -11.348 84.636 -17.036 128.154 -17.234 c 43.502 0.198 87.336 5.886 128.256 17.234 c 97.734 -66.244 140.656 -52.49 140.656 -52.49 c 27.872 70.528 10.35 122.6 5.036 135.5 c 32.82 35.856 52.694 81.532 52.694 137.428 c 0 196.654 -119.778 239.95 -233.79 252.624 c 18.364 15.89 34.724 47.046 34.724 94.812 c 0 68.508 -0.596 123.644 -0.596 140.508 c 0 13.628 9.222 29.594 35.172 24.566 c 203.322 -67.776 349.842 -259.626 349.842 -485.768 c 0 -282.78 -229.234 -511.998 -511.992 -511.998 Z',
  'check': 'M 500 9.4 C 229.4 9.4 10 229 10 500 c 0 271 219.4 490.6 490 490.6 c 270.6 0 490 -219.7 490 -490.6 C 990 229 770.6 9.4 500 9.4 Z M 410.6 713.6 L 212.6 516.1 l 49.9 -49.8 l 148 147.8 l 326.9 -326.3 l 49.9 49.8 L 410.6 713.6 Z'
}

export const IconContext = React.createContext(
  icons // default icons
)
