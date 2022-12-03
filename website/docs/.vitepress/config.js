export default {
    title: 'Yongli Zhu Main Page',
    description: 'Just playing around.',
    base: '/~yongliz/',
    appearance: true,
    themeConfig: {
        sidebar: [
          {
            text: 'Basic Info',
            items: [
              { text: 'Biography', link: '/bio' },
              { text: 'Teaching', link: '/Teaching' },
              { text: 'Publications', link: '/Publications'},
            ]
          },
          {
            text: 'Data and Code',
            items: [
              { text: 'Power System Dynamics', link: '/data_code_dynamics' },
              { text: 'Power System Reliability', link: '/data_code_reliability'},
              { text: 'ML/AI for Power Systems', link: 'data_code_ML_AI'},
            ]
          }
        ]
      }
    
  }
