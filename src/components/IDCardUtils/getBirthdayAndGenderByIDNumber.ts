/**
 * @功能：根据身份证号获得出生日期
 * @param IDNumber 参数：身份证号 例如；522324199902023314
 * @return 返回值：出生日期
 * @constructor
 */
export const getBirthDayByIDNo = (IDNumber: string) => {
    let birthdayNo: string, birthdayTemp: string;
    if (IDNumber.length === 18) {
        birthdayNo = IDNumber.substring(6, 14);
    } else if (IDNumber.length === 15) {
        birthdayTemp = IDNumber.substring(6, 12);
        birthdayNo = "19" + birthdayTemp;
    } else {
        alert("错误的身份证号码，请核对！")
        return false;
    }
    return birthdayNo.substring(0, 4) + "-" + birthdayNo.substring(4, 6) + "-" + birthdayNo.substring(6, 8);
}

/**
 * @return 性别字符串
 * @param IDNumber 参数：身份证号
 * @constructor
 */
export const getGenderByIDNo = (IDNumber: string) => {
    let genderNumber: string, gender: string;
    if (IDNumber.length === 18) {
        genderNumber = IDNumber.substring(16, 17)
    } else if (IDNumber.length === 15) {
        genderNumber = IDNumber.substring(14, 15)
    } else {
        alert("错误的身份证号码，请核对！")
        return false;
    }
    const temp = parseInt(genderNumber) % 2
    if (temp === 0) {
        gender = '女'
    } else {
        gender = '男'
    }
    return gender;
}

/**
 * 通过身份证号计算年龄
 * @param idCardNo 身份证号码
 */
export const getAgeByIDNo = (idCardNo: string) => {
    let len = (idCardNo + "").length;
    if (len === 0) {
        return false;
    } else {
        if (len !== 15 && len !== 18) {
            //身份证号码只能为15位或18位其它不合法
            return false;
        }
    }
    let strBirthday = "";
    if (len === 18) {
        //处理18位的身份证号码从号码中得到生日和性别代码
        strBirthday =
            idCardNo.substring(6, 4) +
            "/" +
            idCardNo.substring(10, 2) +
            "/" +
            idCardNo.substring(12, 2);
    }
    if (len === 15) {
        strBirthday =
            "19" +
            idCardNo.substring(6, 2) +
            "/" +
            idCardNo.substring(8, 2) +
            "/" +
            idCardNo.substring(10, 2);
    }
    // 时间字符串里，必须是“/”
    let birthDate = new Date(strBirthday);
    let nowDateTime = new Date();
    let age = parseInt(nowDateTime.getFullYear().toString()) - parseInt(birthDate.getFullYear().toString());
    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() === birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        age -= 1;
    }
    return age;
};