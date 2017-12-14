var configuration = module.exports;

configuration.ATcommand ='general:navdata_options';

configuration.optionsPriority = {
'demo' : {
   mask : 1 << 0,
   flyState           : '0',
   controlState       : '0',
   batteryPercentage  : '1',
   theta              : '0', // [mdeg]
   phi                : '0', // [mdeg]
   psi                : '0', // [mdeg]
   altitude           : '0', // [mm]
   velocity           : '0', // [mm/s]
   frameIndex  		  : '0',
   detection  : {
      camera: {
        rotation    : '0',
        translation : '0'
      },
      tagIndex: '0'
    },
   drone  : {
      camera: {
        rotation    : '0',
        translation : '0'
      }
    },
   rotation  : {
      frontBack : '0',
      pitch     : '0',
      theta     : '0',
      y         : '0',
      leftRight : '1',
      roll      : '0',
      phi       : '0',
      x         : '0',
      clockwise : '0',
      yaw       : '0',
      psi       : '0',
      z         : '0'
    }
},

'time': {
	mask : 1 << 1,
    time  : '0' //[ms]
  },

'rawMeasures':  {
	mask : 1 << 2,
    accelerometers  : {
      x: '1', // [LSB]
      y: '1', // [LSB]
      z: '1' // [LSB]
    },
    gyroscopes  : {
      x: '0', // [LSB]
      y: '0', // [LSB]
      z: '0'  // [LSB]
    },
    gyroscopes110  : {
      x: '0', // [LSB]
      y: '0' // [LSB]
    },
    batteryMilliVolt  : '1', //[mV]
	usEcho : {
      start       : '0', // [LSB]
      end         : '0', // [LSB]
      association : '0', // [LSB?]
      distance    : '0'  // [LSB]
    },
    usCurve : {
      time  : '0', // [LSB]
      value : '0', // [LSB]
      ref   : '0'  // [LSB]
    },
    echo  : {
      flagIni : '0', // [LSB]
      num     : '0', // [LSB]
      sum     : '0' // [LSB]
    },
    altTemp   : '0' // [mm]
},

'physMeasures': {
	mask : 1 << 3,
    temperature: {
        accelerometer: '1', // [K]
        gyroscope: '1' //[LSB]
      },
      accelerometers : '0', // [mg]
      gyroscopes     : '1', // [deg/s]
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

      kVX      : '1',
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
        altitude : '0',
        time     : '0'
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
        number : '1'
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
	   temperature :  '1', // [0_1C]
	   pressure : '1', // [Pa]
	  
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
	speed: '1', 
    angle: '0', 
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
        flagMultisinusStart: '1'
      
    },
  },

  'hdvideoStream':  {
	 mask : 1 << 25,
      hdvideoState : '0',
      storageFifo  : {
        nbPackets : '0',
        size      : '1'
      },
      usbkey       : {
        size      : '0',
        freespace : '0',
		remainingTime: '0'
      },
      frameNumber  : '1'
  },
  
  'wifi':  {
	mask : 1 << 26,
    linkQuality: '1'
  }
  
}
 