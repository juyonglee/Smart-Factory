
function stringToHex(value) {
    return parseInt(value);
}

module.exports.jsonToHex = function jsonToBuffer(jsonData) {
    var parsedData = JSON.parse(jsonData);
    var buffer = Buffer.alloc(116);
    var position=0;
    buffer.writeUInt8(stringToHex(parsedData['m_byStart']), position++);
    buffer.writeUInt8(stringToHex(parsedData['m_byCmd']), position++);
    buffer.writeUInt8(stringToHex(parsedData['m_byAddr']), position++);
    buffer.writeUInt8(stringToHex(parsedData['m_byLen']), position++);

    for(var j=0; j<parsedData['m_byaAlarm_history'].length; j++) {
        buffer.writeUInt8(stringToHex(parsedData['m_byaAlarm_history'][j]), position++);
    }
    buffer.writeUInt16LE(stringToHex(parsedData['m_wS_mode']), 14);
    buffer.writeUInt16LE(stringToHex(parsedData['m_wM_status']), 16);
    for(var i=0; i<parsedData['m_waCurrent_nowx10'].length; i++) {
        buffer.writeUInt16LE(stringToHex(parsedData['m_waCurrent_nowx10'][i]), 18+(i*2));
    }
    buffer.writeUInt16LE(stringToHex(parsedData['m_wPressure']), 26);
    buffer.writeUInt16LE(stringToHex(parsedData['m_wParam_runtime']), 28);
    //  Setting PRARAM
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byMode']), 30);
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byOver_current']), 31);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stRunParam']['m_wAuto_puls_val']), 32);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stRunParam']['m_wAlarm_pressure']), 34);

    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byAlarm_current_diff']), 36);
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byPuls_diff']), 37);
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byPuls_sel']), 38);
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byValve_sel']), 39);

    buffer.writeUInt16LE(stringToHex(parsedData['m_stRunParam']['m_wPuls_open_time']), 40);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stRunParam']['m_wPuls_delay_time']), 42);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stRunParam']['m_wShake_on_pressure']), 44);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stRunParam']['m_wShake_on_time']), 46);
    
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byShake_delay_time']), 48);
    buffer.writeUInt8(stringToHex(parsedData['m_stRunParam']['m_byShake_diff']), 49);

    // Setting SPARAM
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byType']), 50);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byMemory_on']), 51);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byMulti_in']), 52);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byBlackout']), 53);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byUint_kpa']), 54);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byMotor_num']), 55);
    
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wCali_ct1']), 56);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wCali_ct2']), 58);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wCali_ct3']), 60);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wCali_ct4']), 62);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wCali_pressure']), 64);


    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_nRev_ct1']), 66);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_nRev_ct2']), 68);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_nRev_ct3']), 70);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_nRev_ct4']), 72);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_nRev_pressure']), 74);


    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byComm_addr']), 76);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byLanguage']), 77);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byComm_baud']), 78);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byDelay_eocr']), 79);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byPower_phase']), 80);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byAll_reset']), 81);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byRuntime_reset']), 82);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byPower_acc_reset']), 83);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byInverter_out']), 84);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byAlarm_history_reset']), 85);


    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wPower_value']), 86);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wPassword']), 88);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wTime_change_fileter']), 90);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wAnalog_out']), 92);
    buffer.writeUInt16LE(stringToHex(parsedData['m_stSysParam']['m_wAnalog_auto_out']), 94);

    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byManual_puls_cycle']), 96);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byManual_hauto_puls']), 97);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byAlarm_relay']), 98);
    buffer.writeUInt8(stringToHex(parsedData['m_stSysParam']['m_byFan_on_time']), 99);

    buffer.writeFloatLE(parseFloat(parsedData['m_fParam_power']), 100);
    buffer.writeUInt16LE(stringToHex(parsedData['m_wReserved'][0]), 105);
    buffer.writeUInt16LE(stringToHex(parsedData['m_wReserved'][1]), 107);
    
    for(var i=0; i<5; i++ ) {
        buffer.writeUInt8(stringToHex(parsedData['m_byReserved'][i]), 109+i);
    }
    
    buffer.writeUInt8(stringToHex(parsedData['m_byChk1']), 113);
    buffer.writeUInt8(stringToHex(parsedData['m_byChk2']), 114);
    buffer.writeUInt8(stringToHex(parsedData['m_byEnd']), 115);
    return buffer;
}
