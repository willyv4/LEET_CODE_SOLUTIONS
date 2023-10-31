
def initHash(input_str):
    dic = {}

    for ltr in input_str:
        if ltr in dic:
            dic[ltr] += 1
        else:
            dic[ltr] = 1

    return dic


def is_possible(input_str):
    obj = initHash(input_str)
    count = 0

    for key in obj:
        if len(input_str) % 2 == 0:
            if obj[key] % 2 != 0:
                return False
        else:
            if obj[key] % 2 != 0:
                count += 1
            if count > 1:
                return False

    return True



			

print(is_possible("geeksooogeeks"))