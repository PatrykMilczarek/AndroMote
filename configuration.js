var configuration = module.exports;

configuration.ATcommand ='general:navdata_options';

configuration.optionsPriority = {
'demo' : {
	  mask : 1 << 0,
	  flyState   : '1',
      controlState	: '1',
      batteryPercentage : '1', //[%]
	  desc_demo_batteryPercentage : 'Baterry Percentage [%]',
      rotation          : '0', //[mdeg]
	  desc_demo_rotation : 'Rotation X - left/right tilt, Rotation Y - forward/backward tilt, Rotation Z - orientation,yaw		[mdeg]',
      frontBackDegrees  : '0', //[mdeg]
      leftRightDegrees  : '0', //[mdeg]
      clockwiseDegrees  : '0', //[mdeg]
      altitude          : '0', //[cm]
	  desc_demo_altitude : 'Altitude[cm]',
      altitudeMeters    : '0',
      velocity          : '0', //[mm/s]
	  desc_demo_velocity : 'Velocity [mm/s]',
      xVelocity         : '0', //[mm/s]
	  desc_demo_xVelocity : 'Linear x velocity [mm/s]',
      yVelocity         : '0', //[mm/s]
	  desc_demo_yVelocity : 'Linear y velocity [mm/s]',
      zVelocity         : '0', //[mm/s]
	  desc_demo_zVelocity : 'Linear z velocity [mm/s]',
      frameIndex        : '0',
	  desc_demo_frameIndex : 'Streamed frame index',
      detection         : '0',
      drone             : '0' 
	 
},

'time': {
	mask : 1 << 1,
    time  : '1', //[s]
	desc_time_time : 'Time [s]'

  },

'rawMeasures':  {
	  mask : 1 << 2,
      accelerometers    : '1', //[LSB]
	  desc_rawMeasures_accelerometers : 'Angular velocity measured by a accelerometer [LSB]',
      gyroscopes        : '1', //[LSB]
	  desc_rawMeasures_gyroscopes : 'Angular velocity measured by a gyroscope [LSB]',
      gyrometers        : '0', //[LSB]
      gyroscopes110     : '0', //[LSB]
      gyrometers110     : '0', 																	
      batteryMilliVolt  : '0', //[mV]
	  desc_rawMeasures_batteryMilliVolt : 'Battery voltage [mV]',
      us                : '0', 
      usDebutEcho       : '0',
      usFinEcho         : '0',
      usAssociationEcho : '0',
      usDistanceEcho    : '0',
      usCourbeTemps     : '0',
      usCourbeValeur    : '0',
      usCourbeRef       : '0',
      echo              : '0',
      flagEchoIni       : '0',
      nbEcho            : '0',
      sumEcho           : '0',
      altTemp           : '0', //[mm]
      altTempRaw        : '0'  //[mm]
},

'physMeasures': {
	mask : 1 << 3,
    temperature: {
        accelerometer: '0', // [K]
		desc_physMeasures_temperature_accelerometer : 'Temperature measured by a accelerometer [K]',
        gyroscope: '0', //[LSB]
		desc_physMeasures_temperature_gyroscope : 'Temperature measured by a gyroscope [LSB]',
      },
      accelerometers : '0', // [mg]
      gyroscopes     : '0', // [deg/s]
      alim3V3        : '0', // [LSB]
      vrefEpson      : '0', // [LSB]
      vrefIDG        : '0' // [LSB]
  },

 'gyrosOffsets':  {
	mask : 1 << 4,
    gyrosOffsets : '0'  // [LSB]
  },

  'eulerAngles':  {
	  mask : 1 << 5,
      theta : '0', // [mdeg?]
      phi   : '0'  // [mdeg?]
   
  },

  'references':  {
	  mask : 1 << 6,
      theta    : '0', // [mdeg]
      phi      : '0', // [mdeg]
      thetaI   : '0', // [mdeg]
      phiI     : '0', // [mdeg]
      pitch    : '0', // [mdeg]
      roll     : '0', // [mdeg]
      yaw      : '0', // [mdeg/s]
      psi      : '0', // [mdeg]

      vx       : '0',
      vy       : '0',
      thetaMod : '0',
      phiMod   : '0',

      kVX      : '0',
      kVY      : '0',
      kMode    : '0',

      ui       : {
        time        : '0',
        theta       : '0',
        phi         : '0',
        psi         : '0',
        psiAccuracy : '0',
        seq         : '0'
      }
   
  },

  'trims':  {
	  mask : 1 << 7,
      angularRates : {
        r : '0'
      },
      eulerAngles : {
        theta : '0', // [mdeg?]
        phi   : '0'  // [mdeg?]
      }
   
  },

  'rcReferences':  {
	  mask : 1 << 8,
      pitch : '0', // [mdeg?]
      roll  : '0', // [mdeg?]
      yaw   : '0', // [mdeg/s?]
      gaz   : '0',
      ag    : '0'
    
  },

  'pwm':  {
	  mask : 1 << 9,
      motors           : '0', // [PWM]
      satMotors        : '0', // [PWM]
      gazFeedForward   : '0', // [PWM]
      gazAltitude      : '0', // [PWM]
      altitudeIntegral : '0', // [mm/s]
      vzRef            : '0', // [mm/s]
      uPitch           : '0', // [PWM]
      uRoll            : '0', // [PWM]
      uYaw             : '0', // [PWM]
      yawUI            : '0', // [PWM] yaw_u_I
      uPitchPlanif     : '0', // [PWM]
      uRollPlanif      : '0', // [PWM]
      uYawPlanif       : '0', // [PWM]
      uGazPlanif       : '0', // [PWM]
      motorCurrents    : '0', // [mA]
      altitudeProp     : '0', // [PWM]
      altitudeDer      : '0'  // [PWM]
   
  },

  'altitude':  {
	  mask : 1 << 10,
      vision   : '0',   // [mm]
      velocity : '0', // [mm/s]
      ref      : '0',   // [mm]
      raw      : '0',   // [mm]
      observer : {
        acceleration : '0', // [m/s2]
        altitude     : '0', // [m]
        x            : '0',
        state        : '0'
      },
      estimated : {
        vb    : {
          x : '0',
          y : '0'
        },
        state : '0'
      }
    
  },

  'visionRaw':  {
	  mask : 1 << 11,
      tx : '0',
      ty : '0',
      tz : '0'
    
  },

  'visionOf':  {
	  mask : 1 << 12,
      dx : '0',
      dy : '0'
   
  },

  'vision':  {
	  mask : 1 << 13,
      state         : '0',
      misc          : '0',
      phi: {
        trim       : '0', // [rad]
        refProp    : '0'  // [rad]
      },
      theta: {
        trim     : '0', // [rad]
        refProp  : '0'  // [rad]
      },
      newRawPicture : '0',
      capture       : {
        theta    : '0',
        phi      : '0',
        psi      : '0',
        altitude : '1', //[cm]
		desc_vision_capture_altitude : 'Drone altitude [cm]',
        time     : '0' //[ms]
      },
      bodyV         : '0', // [mm/s]
      delta         : {
        phi   : '0',
        theta : '0',
        psi   : '0'
      },
      gold          : {
        defined : '0',
        reset   : '0',
        x       : '0',
        y       : '0'
      }
    
  },

  'visionPerf':  {
	  mask : 1 << 14,
      szo      : '0',
      corners  : '0',
      compute  : '0',
      tracking : '0',
      trans    : '0',
      update   : '0',
      custom   : '0'
    
  },

  'trackersSend':  {
	  mask : 1 << 15,
      locked : '0',
      point  : '0'
    
  },

  'visionDetect':  {
	  mask : 1 << 16,
      nbDetected       : '0',
      type             : '0',
      xc               : '0',
      yc               : '0',
      width            : '0',
      height           : '0',
      dist             : '0',
      orientationAngle : '0',
      rotation         : '0',
      translation      : '0',
      cameraSource     : '0'
    
  },

  'watchdog':  {
	mask : 1 << 17,
    watchdog : '0'
  },

  'adcDataFrame':  {
	  mask : 1 << 18,
      version   : '0',
      dataFrame : '0'
  },

  'videoStream':  {
	  mask : 1 << 19,
      quant          : '0',
      frame          : {
        size   : '0', // [bytes]
		desc_videoStream_frame_size : 'Frame size [bytes]',
        number : '0'
      },
      atcmd          : {
        sequence : '0',
        meanGap  : '0', // [ms]
        Gap   : '0', // [SU]
        quality  : '0'
      },
      bitrate        : {
        out     : '0',
        desired : '0'
      },
      data           : '0',
      tcpQueueLevel  : '0',
      fifoQueueLevel : '0'
    
  },

  'games':  {
	  mask : 1 << 20,
      counters: {
        doubleTap  : '0',
        finishLine : '0'
      
    },
  },

  'pressureRaw':  {
	  mask : 1 << 21,
	   up : '0', // [LSB] (UP?)
	   ut : '0', // [LSB] (UT?)
	   temperature :  '0', // [°C]
	   desc_pressureRaw_temperature : "Drone's processor temperature [°C]",
	   pressure : '0', // [Pa]
	   desc_pressureRaw_pressure : 'Pressure [Pa]'
  },

  'magneto':  {
	  mask : 1 << 22,
      mx        : '0', // [LSB]
      my        : '0', // [LSB]
      mz        : '0', // [LSB]
      raw       : '0', // [mG]
      rectified : '0', // [mG]
      offset    : '0', // [mG]
      heading   : {
        unwrapped: '0', // [deg]
        gyroUnwrapped: '0', // [deg]
        fusionUnwrapped: '0' // [mdeg]
      },
      ok     : '0',
      state  : '0', // [SU]
      radius : '0', // [mG]
      error  : {
        mean     : '0', // [mG]
        iance : '0'  // [mG2]
      
    },
  },
 
   'windSpeed': {
	mask : 1 << 23,
	speed: '0', 
	desc_windSpeed_speed : 'Estimated wind speed [m/s]',
    angle: '0', 
	desc_windSpeed_angle : 'Estimated wind direction in North-East frame [rad] e.g. if wind_angle is pi/4, wind is from South-West to North-East',
    compensation: {
        theta: '0', 
        phi: '0'
      },
    stateX: '0', 
    debug: '0'
},

  'kalmanPressure':  {
	  mask : 1 << 24,
      offsetPressure: '0', // [Pa]
      estimated: {
        altitude: '0', // [mm]
        velocity: '0', // [m/s]
        angle: {
          pwm: '0', // [m/s2]
          pressure: '0' // [Pa]
        },
        us: {
          offset: '0', // [m]
          prediction: '0' // [mm]
        },
        coiance: {
          alt: '0', // [m]
          pwm: '0',
          velocity: '0' // [m/s]
        },
        groundEffect: '0', // [SU]
        sum: '0', // [mm]
        reject: '0', // [SU]
        uMultisinus: '0',
        gazAltitude: '0',
        flagMultisinus: '0',
        flagMultisinusStart: '0'
      
    },
  },

  'hdvideoStream':  {
	 mask : 1 << 25,
      hdvideoState : '0',
      storageFifo  : {
        nbPackets : '0',
        size      : '0'
      },
      usbkey       : {
        size      : '0',
        freespace : '0',
		remainingTime: '0'
      },
      frameNumber  : '0'
  },
  
  'wifi':  {
	mask : 1 << 26,
    linkQuality: '0'
  }
  
}
 