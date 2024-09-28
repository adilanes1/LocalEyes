
import React from 'react'
import { Text, Wrapper, Icons } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';

export default function aboutUs() {
    const navigation = useNavigation();
    return (
        <Wrapper isMain backgroundColor={'white'}>
            <Wrapper flexDirectionRow>
                <Wrapper
                    style={{
                        height: height(7),
                        width: width(13),
                        borderWidth: 1,
                        borderColor: '#EDEDED',
                        borderRadius: width(7),
                        backgroundColor: '#FFFFFF',
                        left: width(4),
                        top: height(4),
                    }}
                    justifyContentCenter
                    alignItemsCenter
                >
                    <Icons.Button
                        iconName={'chevron-left'}
                        iconColor={'black'}
                        buttonSize={{ height: height(5), width: width(9) }}
                        onPress={() => {
                            navigation.navigate(routes.help);
                        }}
                    />
                </Wrapper>
                <Wrapper style={{ top: height(6), left: width(30) }}>
                    <Text isMediumFont style={{ color: '#101010' }}>Guidelines</Text>
                </Wrapper>
            </Wrapper>
            <Wrapper style={{ top: height(8), left: width(5), width: width(90) }}>
                <Text isLarge style={{ color: '#000000' }}>
                Local Eyes Guidelines
                </Text>
                <Spacer height={height(1)} />
                <Text isLarge style={{ color: '#878787' ,lineHeight: 24}}>
                    <Text isLarge style={{ color: '#878787' }}>
                        {`Lorem ipsum dolor sit amet. Qui nostrum sint hic magni voluptatem sed eligendi veritatis qui voluptatibus officiis aut neque asperiores ut accusantium itaque. Nam unde harum 33 autem nihil et recusandae soluta et fuga tenetur ex itaque esse. Non neque nulla aut itaque totam quo perferendis voluptatem eum repudiandae omnis in rerum magnam ut accusamus magni. Qui quibusdam sunt et error nihil At quis fuga
ex inventore alias.\nQui ipsum omnis et sint fugiat et       exercitationem nemo non quos minima. Aut dolores eaque qui sint ullam qui tempora aspernatur aut velit corrupti ab ipsa enim. Sit facere minus rem totam dolorem ut minus officiis qui consequuntur aperiam ut nobis sunt. Qui voluptatem dolore et aliquid Quis rem sunt velit et reiciendis tenetur est repellat libero eos quae officiis et veniam placeat. Non fugiat      autem cum omnis dolore ea earum deserunt et voluptas consequatur est laboriosam optio et tempora atque.`}
                    </Text>

                </Text>
            </Wrapper>
        </Wrapper>
    )
}