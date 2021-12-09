import { FC, useState } from 'react'
import SettingsModal from '../SettingsModal'
import './index.scss'

const Navigation: FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)

  const handleOpenSettings = () => {
    setSettingsOpen(true)
  }

  const handleCloseSettings = () => {
    setSettingsOpen(false)
  }

  return (
    <header className="navigation">
      <div className="container">
        <div className="navigation-content">
          <div className="navigation-brand">
            <svg
              className="navigation-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310.56 310.56"
            >
              <path
                className="navigation-logo-path navigation-logo-path-primary"
                d="M236.65,109.927c-6.128,2.271-13.803,4.43-22.844,5.635c1.528,8.948,1.216,22.677-9.728,35.708
			c-1.379,1.642-3.394,2.618-5.539,2.68c-0.072,0.002-0.147,0.004-0.221,0.004c-2.064,0-4.042-0.85-5.464-2.356
			c-9.34-9.882-27.036-26.162-37.572-30.884c-10.543,4.717-28.213,20.981-37.535,30.852c-1.424,1.507-3.402,2.357-5.468,2.357
			c-0.072,0-0.145-0.001-0.219-0.003c-2.145-0.063-4.16-1.038-5.539-2.68c-10.956-13.04-11.273-26.771-9.751-35.719
			c-6.002-0.803-11.342-2.044-16.088-3.442c0.71,0.208,1.383,0.426,2.122,0.625c-19.312,9.053-48.22,31.265-48.063,83.085
			c0.088,29.012,13.567,53.968,38.981,72.172c23.068,16.523,54.488,26.138,89.152,27.408c-2.517,0.089-5.044,0.149-7.592,0.149
			c37.778,0,72.246-9.787,97.057-27.557c25.414-18.204,38.895-43.16,38.983-72.172C291.492,137.623,255.036,116.746,236.65,109.927z
			"
              />
              <path
                className="navigation-logo-path navigation-logo-path-primary"
                d="M78.453,111.423c-1.56-0.497-3.063-1.006-4.465-1.525
			C75.391,110.417,76.889,110.927,78.453,111.423z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M228.11,93.069c1.592,0.704,3.194,1.432,4.811,2.209C231.304,94.501,229.702,93.774,228.11,93.069z
			"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M232.921,95.278c-1.054,0.413-2.196,0.825-3.382,1.232
			C230.724,96.103,231.867,95.692,232.921,95.278z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M222.736,90.8c1.489,0.598,2.993,1.227,4.51,1.887C225.729,92.027,224.226,91.398,222.736,90.8z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M217.319,88.726c1.486,0.538,2.997,1.118,4.518,1.718
			C220.316,89.844,218.805,89.265,217.319,88.726z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M203.749,101.385c8.226-0.406,34.24-5.533,40.151-7.211c-25.874-8.948-48.642-15.557-48.898-15.546
			c-2.056,0.01-3.966-0.744-5.403-2.155c-1.436-1.412-2.254-3.342-2.256-5.357c0,0-0.005-0.951-0.013-2.468
			c-1.477-0.057-2.304-0.05-2.355-0.047c-2.056,0.01-19.765,9.788-21.203,8.378c-1.436-1.412-2.255-3.342-2.256-5.357
			c0,0-0.112-22.664-0.137-25.023c-0.067-6.412-0.308-11.473,3.639-15.528c2.143-2.2,4.82-3.379,8.326-4.001l-1.386-2.013h-2.141
			c-15.236,0-14.081,11.465-14.14,11.842l0.018,44.728c0.002,2.022-0.813,3.962-2.258,5.377c-1.444,1.416-3.402,2.176-5.419,2.147
			c-0.283-0.008-20.291-0.224-49.609,11.403c2.669,0.37,5.472,0.65,8.418,0.797c2.505,0.125,4.783,1.492,6.074,3.643
			s1.422,4.804,0.352,7.073c-0.217,0.484-4.792,10.907,0.286,22.359c9.567-9.348,26.971-25.057,39.527-28.938
			c1.504-0.466,3.046-0.433,4.444,0.003l0.002-0.002c12.56,3.89,29.975,19.613,39.547,28.967c5.161-11.647,0.321-22.222,0.26-22.35
			c-1.071-2.27-0.938-4.925,0.353-7.077C198.962,102.876,201.242,101.509,203.749,101.385z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M91.095,99.239c-0.394-0.087-0.793-0.171-1.178-0.261C90.303,99.068,90.701,99.152,91.095,99.239z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M86.861,98.213c-0.208-0.056-0.402-0.116-0.608-0.173C86.459,98.097,86.653,98.157,86.861,98.213z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M83.858,97.341c-0.325-0.1-0.641-0.202-0.958-0.303C83.218,97.14,83.532,97.241,83.858,97.341z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M80.965,96.394c-0.271-0.094-0.546-0.187-0.81-0.281C80.42,96.208,80.694,96.301,80.965,96.394z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M98.308,100.542c-0.37-0.052-0.724-0.114-1.089-0.169C97.584,100.428,97.938,100.49,98.308,100.542
			z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M212.83,87.177c1.415,0.469,2.846,0.958,4.3,1.483C215.676,88.135,214.246,87.646,212.83,87.177z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M94.671,99.955c-0.459-0.082-0.911-0.169-1.361-0.257C93.76,99.786,94.211,99.872,94.671,99.955z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M198.99,83.232c1.207,0.289,2.435,0.595,3.692,0.926C201.424,83.827,200.196,83.521,198.99,83.232z
			"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M175.322,79.406c0.662,0.051,1.371,0.111,2.128,0.182
			C176.691,79.516,175.986,79.456,175.322,79.406z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M177.79,79.621c0.74,0.072,1.52,0.153,2.343,0.248C179.309,79.774,178.53,79.693,177.79,79.621z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M175.004,79.382c-0.663-0.049-1.284-0.091-1.841-0.122
			C173.718,79.291,174.343,79.333,175.004,79.382z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M171.542,79.182c0.47,0.018,1.006,0.043,1.606,0.077C172.547,79.225,172.013,79.2,171.542,79.182z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M180.366,79.894c0.845,0.098,1.745,0.213,2.67,0.338C182.109,80.107,181.212,79.992,180.366,79.894
			z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M225.578,97.758c1.074-0.313,2.106-0.632,3.096-0.961
			C227.684,97.124,226.651,97.445,225.578,97.758z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M187.127,80.843c0.974,0.158,1.977,0.33,3.013,0.519C189.103,81.173,188.102,81.001,187.127,80.843
			z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M202.995,84.239c1.311,0.348,2.656,0.728,4.016,1.125
			C205.651,84.967,204.307,84.587,202.995,84.239z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M194.69,82.26c1.154,0.245,2.337,0.507,3.548,0.792C197.026,82.768,195.845,82.505,194.69,82.26z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M190.501,81.426c1.093,0.202,2.229,0.428,3.385,0.666
			C192.729,81.854,191.594,81.628,190.501,81.426z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M183.644,80.315c0.929,0.129,1.894,0.272,2.896,0.431
			C185.537,80.587,184.574,80.445,183.644,80.315z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-secondary"
                d="M207.9,85.625c1.345,0.401,2.711,0.825,4.098,1.276C210.611,86.45,209.245,86.026,207.9,85.625z"
              />
              <path
                className="navigation-logo-path navigation-logo-path-dark"
                d="M253.918,101.192c1.81-1.5,2.834-3.76,2.724-6.128c-0.117-2.536-1.506-4.842-3.692-6.131
		c-32.363-19.08-62.663-23.529-76.4-24.547c0,0-0.035-21.369,0-22.576c2.742-0.393,8.046-0.393,10.645-0.393
		c2.797,0,5.362-1.551,6.661-4.027c1.299-2.477,1.116-5.468-0.472-7.769l-18.22-26.375C173.76,1.213,171.447,0,168.975,0h-9.187
		c-13.698,0-25.024,10.7-25.78,24.21c0,0-0.043,1.011-0.043,1.506l0.016,38.655c-13.745,1.011-44.036,5.442-76.369,24.491
		c-2.188,1.289-3.576,3.594-3.696,6.129c-0.11,2.392,0.932,4.674,2.777,6.173C34.154,112.952,4.028,139.285,4.2,195.834
		c0.102,33.562,16.176,63.521,45.264,84.355c27.343,19.585,64.923,30.371,105.815,30.371s78.472-10.786,105.815-30.371
		c29.086-20.834,45.162-50.791,45.266-84.355C306.528,139.334,276.453,112.994,253.918,101.192z M252.336,267.961
		c-24.811,17.771-59.279,27.557-97.057,27.557s-72.246-9.787-97.057-27.557c-25.414-18.203-38.892-43.16-38.981-72.172
		c-0.176-58.254,36.387-79.106,54.747-85.891c6.12,2.265,13.772,4.418,22.779,5.623c-1.522,8.947-1.204,22.679,9.752,35.719
		c1.379,1.642,3.394,2.618,5.539,2.68c0.074,0.002,0.147,0.003,0.219,0.003c2.066,0,4.044-0.85,5.468-2.357
		c9.323-9.871,26.992-26.134,37.535-30.852c10.537,4.722,28.232,21.002,37.572,30.884c1.422,1.506,3.4,2.356,5.464,2.356
		c0.075,0,0.149-0.002,0.221-0.004c2.145-0.063,4.16-1.038,5.539-2.68c10.944-13.031,11.256-26.759,9.728-35.708
		c9.04-1.204,16.716-3.364,22.844-5.635c18.386,6.818,54.843,27.695,54.668,85.862C291.23,224.801,277.75,249.757,252.336,267.961z
		 M141.346,79.124c2.017,0.028,3.976-0.731,5.419-2.147c1.445-1.415,2.26-3.353,2.258-5.375l-0.018-44.725
		c0.059-0.377-0.237-11.835,10.782-11.835h5.243l8.312,12.034c-3.506,0.622-6.183,1.794-8.326,3.994
		c-3.946,4.055-3.706,9.116-3.639,15.528c0.026,2.359,0.137,25.023,0.137,25.023c0.002,2.014,0.821,3.945,2.256,5.357
		c1.438,1.411,3.347,2.165,5.404,2.155c0.312-0.014,29.57-0.276,63.746,16.145c-6.97,2.732-16.851,5.499-29.172,6.107
		c-2.507,0.124-4.787,1.49-6.079,3.643c-1.291,2.152-1.424,4.807-0.353,7.077c0.061,0.127,4.9,10.702-0.26,22.35
		c-9.571-9.354-26.987-25.077-39.547-28.967l-0.002,0.002c-1.398-0.436-2.94-0.469-4.444-0.003
		c-12.556,3.881-29.96,19.59-39.527,28.938c-5.078-11.452-0.503-21.875-0.286-22.358c1.069-2.269,0.938-4.922-0.352-7.073
		c-1.291-2.151-3.569-3.517-6.074-3.643c-12.219-0.612-22.128-3.407-29.139-6.157C111.811,78.831,141.029,79.115,141.346,79.124z"
              />
            </svg>

            <p className="navigation-title">Tomato</p>
          </div>

          <div className="navigation-settings">
            <a
              href="https://github.com/rienst/tomato-mobx"
              target="_blank"
              rel="noreferrer"
              className="navigation-button"
            >
              <svg
                className="navigation-button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            <button className="navigation-button" onClick={handleOpenSettings}>
              <svg
                className="navigation-button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>
            </button>

            <SettingsModal
              open={settingsOpen}
              onDismiss={handleCloseSettings}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
