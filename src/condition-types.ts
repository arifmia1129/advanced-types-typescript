type GenericCourse = {
    firstCourse:"Complete Web Development",
    secondeCourse:"Express Node",
    thirdCourse:"Redux"
};

type CheckCourse<T,K> = K extends keyof T ? true : false;

type checkResult = CheckCourse<GenericCourse, "thirdCourse">

type team = "manager" | "developer" | "bda" | "cc" | "rider";

type removeTeam<T, K> = T extends K ? never : T;

type currentTeam = removeTeam<team, "bda">;